import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Platform for social media',
      type: 'string',
    },

    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
})
