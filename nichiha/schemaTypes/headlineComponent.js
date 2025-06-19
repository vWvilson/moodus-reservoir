import {TextIcon} from '@sanity/icons'

export const headlineComponent = {
    name: 'headlineComponent',
    title: 'Headline Components',
    type: 'document',
    icon: TextIcon,
    groups: [{ name: 'components', title: 'Components' }],
    fields: [
      {
        name: 'text',
        title: 'Text',
        type: 'string',
      },
      
      {
        name: 'size',
        title: 'Size',
        type: 'string',
        options: {
          list: ['small', 'medium', 'large'],
        },
      },
      {
        name: 'alignment',
        title: 'Alignment',
        type: 'string',
        options: {
          list: ['left', 'center', 'right'],
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  
  };