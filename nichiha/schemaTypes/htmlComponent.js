import {CodeBlockIcon} from '@sanity/icons'

export const htmlComponent = {
    name: "htmlComponent",
    title: "HTML Component",
    type: "document",
    icon: CodeBlockIcon,
    groups: [{ name: 'components', title: 'Components' }],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: "html",
        title: "HTML Code",
        type: "text",
        description: "Enter raw HTML code here",
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  