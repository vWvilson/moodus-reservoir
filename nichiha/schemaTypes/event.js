export const event = {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Event Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Event Date',
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Short Description',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Main Image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  