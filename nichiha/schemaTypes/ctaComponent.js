export const ctaComponent = {
    name: 'ctaComponent',
    title: 'Call to Action Components',
    type: 'document',
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
        type: 'string',
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