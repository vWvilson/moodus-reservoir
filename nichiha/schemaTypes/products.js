
export const optionsList = {
    style: [
      { title: 'Corrugated', value: 'corrugated' },
      { title: 'Stucco', value: 'stucco' },
      { title: 'Smooth', value: 'smooth' },
      { title: 'Wood', value: 'wood' },
      { title: 'Stone', value: 'stone' },
      { title: 'Concrete', value: 'concrete' },
      { title: 'Brick', value: 'brick' },
      { title: 'Block', value: 'block' },

    ],
    finish: [
      { title: 'Matte', value: 'matte' },
      { title: 'High Gloss', value: 'high-gloss' },
      { title: 'Semi-Gloss', value: 'semi-gloss' },
    ],
    color: [
        { title: 'White', value: 'white' },
        { title: 'Black', value: 'black' },
        { title: 'Black wood', value: 'black-wood' },
        { title: 'Custon', value: 'custom' },
        { title: 'Dark Gray', value: 'dark-gray' },
        { title: 'Gray', value: 'gray' },
        { title: 'Blue', value: 'blue' },
        { title: 'Green', value: 'green' },
        { title: 'Red', value: 'red' },
        { title: 'Dark Brown', value: 'dark-brown' },
        {title: 'Light Brown', value: 'light-brown'},
        { title: 'Primed', value: 'primed' },
        { title: 'Beige', value: 'beige' },
    ],
    orientation: [
      { title: 'Vertical', value: 'vertical' },
      { title: 'Horizontal', value: 'horizontal' },
 
    ]
  };
  
  export const product = {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'productType',
        title: 'Product Type',
        type: 'string',
        options: {
          list: [
            { title: 'Wall Panels', value: 'wall-panels' },
            { title: 'Flooring', value: 'flooring' },
            { title: 'Ceiling System', value: 'ceiling-system' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'title',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true },
        validation: Rule => Rule.required()
      },
      {
        name: 'gallery',
        title: 'Image Gallery',
        type: 'array',
        of: [{ type: 'image' }]
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'styles',
        title: 'Available Styles',
        type: 'array',
        of: [{
          type: 'string',
          options: {
            list: optionsList.style
          }
        }],
        validation: Rule => Rule.required()
      },
      {
        name: 'finishes',
        title: 'Available Finishes',
        type: 'array',
        of: [{
          type: 'string',
          options: {
            list: optionsList.finish
          }
        }],
        validation: Rule => Rule.required()
      },
      {
        name: 'orientations',
        title: 'Installation Orientations',
        type: 'array',
        of: [{
          type: 'string',
          options: {
            list: optionsList.orientation
          }
        }],
        validation: Rule => Rule.required()
      },
      {
        name: 'specs',
        title: 'Technical Specifications',
        type: 'file',
        options: {
          accept: '.pdf'
        }
      },
      {
        name: 'installationGuide',
        title: 'Installation Guide',
        type: 'file',
        options: {
          accept: '.pdf'
        }
      }
    ]
  };