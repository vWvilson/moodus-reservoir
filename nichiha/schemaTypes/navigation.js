import { MenuIcon } from '@sanity/icons'

export const navigation = {
  name: 'navigation',
  title: 'Menus',
  type: 'document',
  icon: MenuIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'navId',
      type: 'slug',
      title: 'Navigation ID',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigation Items',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label'
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Internal links should start with "/", external links should be full URLs (https://...)'
            },
            {
              name: 'internalLink',
              type: 'reference',
              title: 'Internal Page',
              description: 'Select a page instead of adding a URL manually',
              to: [{ type: 'page' }]
            },
            {
              name: 'subItems',
              type: 'array',
              title: 'Submenu Items',
              of: [{ type: 'reference', to: [{ type: 'navigation' }] }]
            }
          ]
        }
      ]
    }
  ]
}
