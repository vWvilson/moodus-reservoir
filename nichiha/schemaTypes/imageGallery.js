import { ImagesIcon } from '@sanity/icons'

export const imageGallery = {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ 
        type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
      }],
    },
  ],
  preview: {
    select: { 
      images: 'images',
    },
  },

}