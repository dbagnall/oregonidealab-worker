import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Hero Title',
          defaultValue: 'The solution to problems in a democracy is more democracy',
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          label: 'Hero Subtitle',
          defaultValue: 'Join thousands of Oregonians working for practical solutions',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Hero Background Image',
        },
        {
          name: 'showForm',
          type: 'checkbox',
          label: 'Show Signup Form',
          defaultValue: true,
        },
        {
          name: 'formTitle',
          type: 'text',
          label: 'Form Title',
          defaultValue: 'Get Involved',
        },
        {
          name: 'formSubtitle',
          type: 'text',
          label: 'Form Subtitle',
          defaultValue: 'Sign up to receive updates on our initiatives',
        },
      ],
    },
    // How We Work Section
    {
      name: 'howWeWork',
      type: 'group',
      label: 'How We Work Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
          defaultValue: 'How We Work',
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          label: 'Section Subtitle',
          defaultValue: 'Three principles that guide everything we do',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'illustration',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Icon/Illustration',
            },
          ],
        },
      ],
    },
    // Why Oregon Needs Change
    {
      name: 'whyChange',
      type: 'group',
      label: 'Why Oregon Needs Change Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
          defaultValue: 'Why Oregon Needs Change',
        },
        {
          name: 'points',
          type: 'array',
          label: 'Key Points',
          fields: [
            {
              name: 'text',
              type: 'richText',
              required: true,
            },
          ],
        },
      ],
    },
    // Key Issues Section
    {
      name: 'keyIssues',
      type: 'group',
      label: 'Key Issues Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
          defaultValue: 'Key Issues Facing Oregon',
        },
        {
          name: 'intro',
          type: 'textarea',
          label: 'Introduction Text (Optional)',
        },
        {
          name: 'issues',
          type: 'array',
          label: 'Issues',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    // Who We Are Section
    {
      name: 'whoWeAre',
      type: 'group',
      label: 'Who We Are Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
          defaultValue: 'Who We Are',
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          label: 'Content',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Section Image',
        },
        {
          name: 'imageOnLeft',
          type: 'checkbox',
          label: 'Image on Left',
          defaultValue: false,
        },
      ],
    },
    // What We Do Section
    {
      name: 'whatWeDo',
      type: 'group',
      label: 'What We Do Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
          defaultValue: 'What We Do',
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          label: 'Content',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Section Image',
        },
        {
          name: 'imageOnLeft',
          type: 'checkbox',
          label: 'Image on Left',
          defaultValue: true,
        },
      ],
    },
    // Gallery Section
    {
      name: 'gallery',
      type: 'group',
      label: 'Gallery Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Section Title',
          defaultValue: 'The Oregon We Love',
        },
        {
          name: 'images',
          type: 'array',
          label: 'Gallery Images',
          maxRows: 6,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
