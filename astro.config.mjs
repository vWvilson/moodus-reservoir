
import sanity from '@sanity/astro'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { loadEnv } from 'vite'
import netlify from "@astrojs/netlify";

const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,

} = loadEnv(import.meta.env.MODE, process.cwd(), "");



const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID 
const dataset = PUBLIC_SANITY_STUDIO_DATASET 





// if (!projectId) {
//   throw new Error("Missing Sanity projectId. Check your .env file.");
// }
// if (!dataset) {
//   throw new Error("Missing Sanity dataset. Check your .env file.");
// }

export default defineConfig({
  output: "server",
  integrations: [sanity({
    projectId,
    dataset,
    useCdn: false, 
    studioBasePath: '/admin',
    stega: {
      studioUrl: '/admin',
    },
  }), react()],
  adapter: netlify(),
  devToolbar: {
    enabled: false
  }

})
