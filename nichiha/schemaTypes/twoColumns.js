import { blockContent } from './blockContent';

export const twoColumn = {
  name: "twoColumn",
  title: "Two Column Layout",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "leftColumn",
      title: "Left Column Content",
      type: "array",
      of: blockContent.of,
    },
    {
      name: "rightColumn",
      title: "Right Column Content",
      type: "array",
      of: blockContent.of,
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },
    {
      name: "textAlignment",
      title: "Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
    },
  ],
};
