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
              title: 'Label',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Internal links should start with "/", external links should be full URLs (https://...)',
              hidden: ({ parent }) => !!parent?.internalLink
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
              description: 'Add dropdown menu items',
              of: [
                {
                  type: 'object',
                  name: 'subNavItem',
                  title: 'Submenu Item',
                  fields: [
                    {
                      name: 'label',
                      type: 'string',
                      title: 'Label',
                      validation: (Rule) => Rule.required()
                    },
                    {
                      name: 'url',
                      type: 'string',
                      title: 'URL',
                      description: 'Internal links should start with "/", external links should be full URLs (https://...)',
                      hidden: ({ parent }) => !!parent?.internalLink
                    },
                    {
                      name: 'internalLink',
                      type: 'reference',
                      title: 'Internal Page',
                      description: 'Select a page instead of adding a URL manually',
                      to: [{ type: 'page' }]
                    }
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'url',
                      internalSlug: 'internalLink.slug.current'
                    },
                    prepare({ title, subtitle, internalSlug }) {
                      return {
                        title,
                        subtitle: internalSlug ? `/${internalSlug}` : subtitle
                      }
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
              internalSlug: 'internalLink.slug.current',
              subItemsCount: 'subItems'
            },
            prepare({ title, subtitle, internalSlug, subItemsCount }) {
              const hasSubItems = subItemsCount && subItemsCount.length > 0
              return {
                title: `${title}${hasSubItems ? ' ▼' : ''}`,
                subtitle: internalSlug ? `/${internalSlug}` : subtitle
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      itemsCount: 'items'
    },
    prepare({ title, itemsCount }) {
      return {
        title,
        subtitle: `${itemsCount?.length || 0} menu items`
      }
    }
  }
}