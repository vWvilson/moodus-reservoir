import {ImageIcon} from '@sanity/icons'

export const imageComponent = {
  name: 'imageComponent',
  title: 'Image Components',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },

};
