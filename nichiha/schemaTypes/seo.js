export const seoSchema = {
    name: 'seoPanel',
    title: 'SEO',
    type: 'object',
    fields: [
      {
        name: 'seotitle',
        title: 'Meta Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'seoDescription',
        title: 'Meta Description',
        type: 'text',
        validation: (Rule) => Rule.max(160),
      },
      {
        name: 'seoKeywords',
        title: 'Meta Keywords',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'image',
        title: 'OG Image',
        type: 'image',
        options: { hotspot: true },
      },
    ],
  };
  