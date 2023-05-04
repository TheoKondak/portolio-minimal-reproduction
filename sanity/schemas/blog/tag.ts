import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'tag',
  title: 'Blog Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
