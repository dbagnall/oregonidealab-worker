import { getPayload as getPayloadClient } from 'payload'
import config from '@/payload.config'

let cached: any = null

/**
 * Get Payload CMS client instance
 * This function caches the Payload instance to avoid multiple connections
 */
export async function getPayload() {
  if (cached) {
    return cached
  }

  cached = await getPayloadClient({ config })
  return cached
}

/**
 * Fetch homepage data from Payload CMS
 */
export async function getHomepageData() {
  const payload = await getPayload()

  try {
    const homepage = await payload.findGlobal({
      slug: 'homepage',
      depth: 2, // Include related media
    })

    return homepage
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

/**
 * Fetch navigation data from Payload CMS
 */
export async function getNavigationData() {
  const payload = await getPayload()

  try {
    const navigation = await payload.find({
      collection: 'navigation',
      limit: 1,
      depth: 1,
    })

    return navigation.docs[0] || null
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return null
  }
}

/**
 * Fetch site settings from Payload CMS
 */
export async function getSiteSettings() {
  const payload = await getPayload()

  try {
    const settings = await payload.findGlobal({
      slug: 'site-settings',
      depth: 2, // Include logo media
    })

    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

/**
 * Helper to get image URL from Payload media object
 */
export function getMediaUrl(media: any): string {
  if (!media) return ''

  if (typeof media === 'string') return media

  if (media.url) return media.url

  return ''
}
