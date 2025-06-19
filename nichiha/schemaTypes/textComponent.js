import {TextIcon} from '@sanity/icons'


export const textComponent = {
    name: 'textComponent',
    title: 'Text Components',
    type: 'document',
    icon: TextIcon,
    groups: [{ name: 'components', title: 'Components' }],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  
  };
  