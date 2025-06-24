import { DocumentIcon } from '@sanity/icons'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'page', title: 'Page' },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'page',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'page',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'headerImage',
      title: 'Header Background Image (optional)',
      type: 'image',
      group: 'page',
      description: 'Background image for the page header. If not provided, a solid color background will be used.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility',
        },
      ],
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      group: 'page',
      of: [
        // Simple text block
        {
          type: 'block',
          title: 'Text',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        // Simple image
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Important for accessibility and SEO',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption (optional)',
            },
          ],
        },
        // Call-to-action button
        {
          type: 'object',
          name: 'button',
          title: 'Button',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Button Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              type: 'url',
              title: 'Button Link',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'style',
              type: 'string',
              title: 'Button Style',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Outline', value: 'outline' },
                ],
              },
              initialValue: 'primary',
            },
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
            },
          },
        },
        // Callout/highlight box
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title (optional)',
            },
            {
              name: 'text',
              type: 'text',
              title: 'Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              type: 'string',
              title: 'Type',
              options: {
                list: [
                  { title: 'Info', value: 'info' },
                  { title: 'Success', value: 'success' },
                  { title: 'Warning', value: 'warning' },
                  { title: 'Highlight', value: 'highlight' },
                ],
              },
              initialValue: 'info',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'text',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Callout',
                subtitle: subtitle?.substring(0, 50) + '...',
              }
            },
          },
        },
        // YouTube Embed
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube URL',
              validation: (Rule) => Rule.required().uri({
                scheme: ['http', 'https'],
                allowRelative: false,
                message: 'Must be a valid YouTube URL',
              }),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Video Title (optional)',
            },
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare({ title, url }) {
              return {
                title: title || 'YouTube Video',
                subtitle: url ? url : 'No URL provided',
              }
            },
          },
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoPanel',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
      }
    },
  },
}