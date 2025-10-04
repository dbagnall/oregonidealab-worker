// storage-adapter-import-placeholder
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { CloudflareContext, getCloudflareContext } from '@opennextjs/cloudflare'
import type { GetPlatformProxyOptions } from 'wrangler'
import { r2Storage } from '@payloadcms/storage-r2'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Navigation } from './collections/Navigation'
import { Posts } from './collections/Posts'
import { SiteSettings } from './collections/SiteSettings'
import { Homepage } from './globals/Homepage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isProduction = process.env.NODE_ENV === 'production'
const remoteBindingsEnv = process.env.CLOUDFLARE_REMOTE_BINDINGS
const cloudflareRemoteBindings =
  remoteBindingsEnv != null ? remoteBindingsEnv === 'true' : true
const cloudflare = await resolveCloudflareContext()

if (!cloudflare.env?.D1) {
  throw new Error(
    'Cloudflare D1 binding is not available. Ensure Wrangler is installed, logged in, and able to access the configured database. You can opt out of remote bindings by setting CLOUDFLARE_REMOTE_BINDINGS=false.',
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Posts,
    Categories,
    Navigation,
    {
      slug: 'pages',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'content', type: 'richText', required: true },
      ],
    },
    Media,
  ],
  globals: [Homepage, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteD1Adapter({ binding: cloudflare.env.D1 }),
  plugins: [
    payloadCloudPlugin(),
    r2Storage({
      bucket: cloudflare.env.R2,
      collections: { media: true },
    }),
  ],
})

// Adapted from https://github.com/opennextjs/opennextjs-cloudflare/blob/d00b3a13e42e65aad76fba41774815726422cc39/packages/cloudflare/src/api/cloudflare-context.ts#L328C36-L328C46
async function resolveCloudflareContext(): Promise<CloudflareContext> {
  const shouldUseWrangler =
    Boolean(process.argv.find((value) => value.match(/^(generate|migrate):?/))) ||
    !isProduction

  if (shouldUseWrangler) {
    const context = await tryGetCloudflareContextFromWrangler()
    if (context) return context

    throw new Error(
      'Wrangler was unable to provide Cloudflare bindings. Ensure you have `pnpm wrangler login` and the configured database/bucket bindings are reachable.',
    )
  }

  return getCloudflareContext({ async: true })
}

async function tryGetCloudflareContextFromWrangler(): Promise<CloudflareContext | null> {
  try {
    const { getPlatformProxy } = await import('wrangler')
    return getPlatformProxy({
      environment: process.env.CLOUDFLARE_ENV,
      experimental: { remoteBindings: cloudflareRemoteBindings },
    } satisfies GetPlatformProxyOptions)
  } catch (error) {
    if (isModuleNotFoundError(error)) {
      return null
    }

    throw error
  }
}

function isModuleNotFoundError(error: unknown): error is NodeJS.ErrnoException {
  return (
    Boolean(error) &&
    typeof error === 'object' &&
    'code' in error &&
    (error as { code?: string }).code === 'MODULE_NOT_FOUND'
  )
}
