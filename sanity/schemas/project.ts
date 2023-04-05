import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'githubLink',
      title: 'GithubLink',
      type: 'url',
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'url',
    },
  ],
})
