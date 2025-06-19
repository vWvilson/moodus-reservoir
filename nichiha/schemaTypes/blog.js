import { blockContent } from './blockContent';
import {DocumentIcon} from '@sanity/icons'

export const blog = {
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  icon: DocumentIcon,
  groups: [ { name: 'blog', title: 'Blog' },{ name: 'seo', title: 'SEO' }],
  fields: [
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      group: 'blog',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'text',
      group: 'blog',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'blog',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
      group: 'blog',
    },
    {
      title: 'Body Content',
      name: 'bodyContent',
      group: 'blog',
      type: 'array',
      of: blockContent.of, 
    },
    {
      title: 'Category',
      name: 'category',
      group: 'blog',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'All Categories', value: 'allCategories' },
              { title: 'Announcements', value: 'announcements' },
              { title: 'News', value: 'news' },
              { title: 'Projects', value: 'projects' },
              { title: 'Design', value: 'design' },
              { title: 'Performance', value: 'performance' },
              { title: 'Trends', value: 'trends' },
              { title: 'Tips', value: 'tips' },
            ],
          },
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoPanel',
      group: 'seo',
    },

  ],    
  preview: { 
    select: {
      title: 'title',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
};
