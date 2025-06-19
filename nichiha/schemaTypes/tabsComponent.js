import { ImagesIcon } from '@sanity/icons'

export const tabsComponent = {
  name: 'tabsComponent',
  title: 'Tabs Component',
  type: 'document',
  groups: [{ name: 'components', title: 'Components' }],
  icon: ImagesIcon,
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tab',
          title: 'Tab',
          fields: [
            {
              name: 'tabTitle',
              title: 'Tab Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      tabs: 'tabs',
    },
    prepare({ title, tabs }) {
      return {
        title,
        subtitle: `${tabs?.length || 0} Tabs`,
      }
    },
  },
}
