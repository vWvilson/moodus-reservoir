
import {ImageIcon} from '@sanity/icons'


export const calloutCardComponent = {
    name: 'calloutCardComponent',
    title: 'Callout Card Component',
    type: 'document',
    icon: ImageIcon,
    groups: [{ name: 'components', title: 'Components' }],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [{ type: 'linkComponent' }],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  
  };