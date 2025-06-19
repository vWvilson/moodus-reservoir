export const twoColumnCta = {
    name: 'twoColumnCta',
    title: 'Two Column Call to Action',
    type: 'document',
    groups: [{ name: 'components', title: 'Components' }],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
      {
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [{ type: 'linkComponent' }],
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'url',
      },
    ],
    preview: {
      select: {
        title: 'title',
        imageUrl: 'imageUrl',
      },
    },
  
  };