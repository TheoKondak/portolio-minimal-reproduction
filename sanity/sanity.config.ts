import {defineConfig} from 'sanity'
// import {defineConfig} from 'sanity/lib/exports'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index'
import {settingsStructure} from './settingsStructure'

// console.log(process.env.SANITY_STUDIO_PROJECT_ID)
// console.log(settingsStructure)
export default defineConfig({
  name: 'portfolio',
  title: 'portfolio',

  projectId: 'chvg577r',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: settingsStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
