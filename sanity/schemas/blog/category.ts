import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'category',
  title: 'Blog Categories',
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
    defineField({
      name: 'categoryImage',
      title: 'Category Image',
      description: 'Set a category image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
