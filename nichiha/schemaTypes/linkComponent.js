import {LinkIcon} from '@sanity/icons'

export const linkComponent = {
  name: 'linkComponent',
  title: 'Link Components',
  type: 'document',
  icon: LinkIcon,
  fields: [
    
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },

};
