import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
import { deskTool } from 'sanity/desk';
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './nichiha/schemaTypes/'
import { presentationTool } from "sanity/presentation";
// import { resolve } from "./nichiha/lib/resolve";

export default defineConfig({
  name: 'default',
  title: 'Moodus Reservoir',

  projectId: 'yn1x4ymu',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), presentationTool({
    previewUrl: location.origin,
  })],
  studioBasePath: '/admin',
  schema: {
    types: schemaTypes,
  },
})
