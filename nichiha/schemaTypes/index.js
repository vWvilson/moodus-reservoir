// schema.js
import { blog } from './blog';
import { product } from './products';
import { blockContent } from './blockContent';
import { heroComponent } from './heroComponent';
import { ctaComponent } from './ctaComponent';
import { twoColumnCta } from './twoColumnCta';
import { calloutCardComponent } from './calloutCard';
import { headlineComponent } from './headlineComponent';
import { imageComponent } from './imageComponent';
import { linkComponent } from './linkComponent';
import { textComponent } from './textComponent';
import { page } from './page';
import { twoColumn }  from './twoColumns';
import { imageGallery } from './imageGallery';
import { htmlComponent } from './htmlComponent';
import { navigation } from './navigation';
import { tabsComponent } from './tabsComponent';
import {seoSchema} from './seo';

export const schemaTypes = [
  seoSchema,
  blog,
  blockContent,
  product,
  page,
  heroComponent,
  ctaComponent,
  calloutCardComponent,
  twoColumnCta,
  headlineComponent,
  imageComponent,
  linkComponent,
  textComponent,
  twoColumn,
  imageGallery,
  htmlComponent,
  navigation,
  tabsComponent,
];
