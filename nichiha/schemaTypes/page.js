import { heroComponent } from './heroComponent';
import { ctaComponent } from './ctaComponent';
import { headlineComponent } from './headlineComponent';
import { imageComponent } from './imageComponent';
import { linkComponent } from './linkComponent';
import { textComponent } from './textComponent';
import { blockContent } from './blockContent';
import { htmlComponent } from './htmlComponent';
import { tabsComponent } from './tabsComponent';
import {DocumentIcon} from '@sanity/icons'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [{ name: 'seo', title: 'SEO' }, { name: 'page', title: 'Page' },],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'text',
      group: 'page',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'page',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'components',
      title: 'Components',
      group: 'page',
      type: 'array',
      of: [
        { name: 'heroComponent', type: 'reference', to: [{ type: 'heroComponent' }] },
        { name: 'ctaComponent', type: 'reference', to: [{ type: 'ctaComponent' }] },
        { name: 'headlineComponent', type: 'reference', to: [{ type: 'headlineComponent' }] },
        { name: 'imageComponent', type: 'reference', to: [{ type: 'imageComponent' }] },
        { name: 'linkComponent', type: 'reference', to: [{ type: 'linkComponent' }] },
        { name: 'textComponent', type: 'reference', to: [{ type: 'textComponent' }] },
        { name: "htmlComponent", type: "reference", to: [{ type: "htmlComponent" }] },
        { name: 'tabsComponent', type: 'reference', to: [{ type: 'tabsComponent' }] },
        { name: 'calloutCardComponent', type: 'reference', to: [{ type: 'calloutCardComponent' }] },

     
      ],
    },
    {
      title: 'Content',  
      name: 'blockContent',
      group: 'page',
      type: 'array',
      of: blockContent.of, 
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoPanel',
      group: 'seo',
    }
  ],
  preview: { 
    select: {
      title: 'title',

    },
    prepare(selection) {
      const { title} = selection;
      return {
        title,
      
      };
    },
  },

};
