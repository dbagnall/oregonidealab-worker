import type { CollectionConfig } from 'payload'

export const Navigation: CollectionConfig = {
  slug: 'navigation',
  admin: {
    useAsTitle: 'name',
    description: 'Manage navigation menus',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Menu Name',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Navigation Items',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          admin: {
            description: 'Use # for anchor links (e.g., #home, #key-issues)',
          },
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call to Action Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show CTA Button',
          defaultValue: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          defaultValue: 'Donate',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          defaultValue: '#donate',
        },
      ],
    },
  ],
}
