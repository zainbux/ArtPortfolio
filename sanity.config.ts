import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-app',

  projectId: '7vb894qq',
  dataset: 'production',

  basePath: "/admin",

  apiVersion:"2023-06-08",

  schema: {types: schemas},

  plugins: [deskTool()],

})
