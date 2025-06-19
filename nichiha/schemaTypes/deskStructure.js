
import {DocumentsIcon} from '@sanity/icons'
import {ComponentIcon} from '@sanity/icons'


export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // pages
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('page')
            .title('Pages')
        ),

      // components 
      S.listItem()
        .title('Components')
        .icon(ComponentIcon)
        .child(
          S.list()
            .title('Components')
            .items([
              S.documentTypeListItem('heroComponent').title('Hero Components'),
              S.documentTypeListItem('ctaComponent').title('CTA Components'),
              S.documentTypeListItem('twoColumnCta').title('Two Column CTA Components'),
              S.documentTypeListItem('calloutCardComponent').title('Callout Card Components'),
              S.documentTypeListItem('headlineComponent').title('Headlines'),
              S.documentTypeListItem('imageComponent').title('Images'),
              S.documentTypeListItem('linkComponent').title('Links'),
              S.documentTypeListItem('textComponent').title('Text Blocks'),
              S.documentTypeListItem('htmlComponent').title('HTML Blocks'),
              S.documentTypeListItem('tabsComponent').title('Tabs Components'),
            ])
        ),

      // blogs
      S.listItem()
        .title('Blog')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('blog').title('Blog Posts')
        ),


      ...S.documentTypeListItems().filter(
        (listItem) => !['page', 'heroComponent','calloutCardComponent', 'ctaComponent','twoColumnCta', 'headlineComponent', 'imageComponent', 'linkComponent', 'textComponent', 'htmlComponent', 'blog','tabsComponent'].includes(listItem.getId())
      ),
    ]);
