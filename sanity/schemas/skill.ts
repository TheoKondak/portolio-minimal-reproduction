import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },

    {
      name: 'website',
      title: 'Website',
      description: 'Website of the technology',
      type: 'string',
    },

    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100),
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
      name: 'width',
      title: 'Width',
      description: 'Width of the icon. Takes no unit only a number.',
      type: 'string',
    },

    {
      name: 'height',
      title: 'Height',
      description: 'Height of the icon. Takes no unit only a number',
      type: 'string',
    },
  ],
})
