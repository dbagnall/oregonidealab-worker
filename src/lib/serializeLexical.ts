/**
 * Serialize Lexical editor content to HTML
 * This is a simplified serializer - you may need to extend it based on your needs
 */

interface LexicalNode {
  type: string
  children?: LexicalNode[]
  text?: string
  format?: number
  tag?: string
  [key: string]: any
}

interface LexicalContent {
  root?: {
    children?: LexicalNode[]
  }
}

export function serialize(content: LexicalContent | string): string {
  if (typeof content === 'string') {
    return content
  }

  if (!content || !content.root || !content.root.children) {
    return ''
  }

  return serializeChildren(content.root.children)
}

function serializeChildren(children: LexicalNode[]): string {
  return children.map(serializeNode).join('')
}

function serializeNode(node: LexicalNode): string {
  if (!node) return ''

  // Text node
  if (node.type === 'text') {
    let text = node.text || ''

    // Apply formatting
    if (node.format) {
      if (node.format & 1) text = `<strong>${text}</strong>` // Bold
      if (node.format & 2) text = `<em>${text}</em>` // Italic
      if (node.format & 4) text = `<u>${text}</u>` // Underline
      if (node.format & 8) text = `<code>${text}</code>` // Code
    }

    return text
  }

  // Paragraph
  if (node.type === 'paragraph') {
    const children = node.children ? serializeChildren(node.children) : ''
    return `<p class="text-lg leading-relaxed mb-6 text-gray-700">${children}</p>`
  }

  // Heading
  if (node.type === 'heading') {
    const tag = node.tag || 'h2'
    const children = node.children ? serializeChildren(node.children) : ''
    const classes = tag === 'h1' ? 'text-4xl font-bold mb-6 mt-8 first:mt-0' :
                    tag === 'h2' ? 'text-3xl font-bold mb-4 mt-8' :
                    tag === 'h3' ? 'text-2xl font-bold mb-3 mt-6' :
                    'text-xl font-bold mb-2 mt-4'
    return `<${tag} class="${classes} text-emerald-900">${children}</${tag}>`
  }

  // List
  if (node.type === 'list') {
    const tag = node.tag || 'ul'
    const children = node.children ? serializeChildren(node.children) : ''
    const classes = tag === 'ol' ? 'list-decimal list-inside space-y-3 mb-6 ml-4' : 'list-disc list-inside space-y-3 mb-6 ml-4'
    return `<${tag} class="${classes}">${children}</${tag}>`
  }

  // List item
  if (node.type === 'listitem') {
    const children = node.children ? serializeChildren(node.children) : ''
    return `<li class="text-gray-700 leading-relaxed">${children}</li>`
  }

  // Link
  if (node.type === 'link') {
    const url = node.url || '#'
    const children = node.children ? serializeChildren(node.children) : ''
    return `<a href="${url}" class="text-emerald-600 hover:text-emerald-800 underline">${children}</a>`
  }

  // Quote
  if (node.type === 'quote') {
    const children = node.children ? serializeChildren(node.children) : ''
    return `<blockquote class="border-l-4 border-emerald-600 pl-4 italic my-4 text-gray-700">${children}</blockquote>`
  }

  // Linebreak
  if (node.type === 'linebreak') {
    return '<br />'
  }

  // Default: just render children
  if (node.children) {
    return serializeChildren(node.children)
  }

  return ''
}
