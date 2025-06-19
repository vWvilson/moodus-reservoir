import {BlockContentIcon} from '@sanity/icons'

export const blockContent = {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    icon: BlockContentIcon,
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H1', value: 'h1' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'Quote', value: 'blockquote' },
          { title: 'Code', value: 'code' },
          { title: 'Highlighted', value: 'highlight' },
        ],
        lists: [
          { title: 'Bullet', value: 'bullet' },
          { title: 'Numbered', value: 'number' },
        ],
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Underline', value: 'underline' },
            { title: 'Strike', value: 'strike-through' },
            { title: 'Superscript', value: 'sup' },
            { title: 'Subscript', value: 'sub' },
          ],
          annotations: [
            {
              title: 'External URL',
              name: 'link',
              type: 'object',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                  validation: (Rule) =>
                    Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                },
              ],
            },
            {
              title: 'Internal Link',
              name: 'internalLink',
              type: 'object',
              fields: [
                {
                  title: 'Reference',
                  name: 'reference',
                  type: 'reference',
                  to: [{ type: 'blog' }],
                },
              ],
            },
          ],
        },
      },
      {
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            title: 'Caption',
            name: 'caption',
            type: 'string',
            options: { isHighlighted: true },
          },
          {
            title: 'Alt Text',
            name: 'alt',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      {
        title: 'YouTube Embed',
        name: 'youtube',
        type: 'object',
        fields: [
          {
            title: 'YouTube URL',
            name: 'url',
            type: 'url',
            validation: (Rule) =>
              Rule.uri({
                scheme: ['http', 'https'],
                allowRelative: false,
              }).error('Must be a valid YouTube URL'),
          },
        ],
      },
      {
        title: 'Callout',
        name: 'callout',
        type: 'object',
        fields: [
          {
            title: 'Type',
            name: 'type',
            type: 'string',
            options: {
              list: [
                { title: 'Warning', value: 'warning' },
                { title: 'Tip', value: 'tip' },
                { title: 'Note', value: 'note' },
              ],
            },
          },
          {
            title: 'Content',
            name: 'content',
            type: 'text',
          },
        ],
      },
    ],
  };
  