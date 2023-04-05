import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Should not be longer than 20 characters',
      type: 'string',
    },
    {
      name: 'secondaryText',
      title: 'Secondary Text',
      description: 'Optional secondary text to display after the name. Max 50 characters',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImageWidth',
      title: 'Hero Image Width',
      type: 'string',
    },
    {
      name: 'heroImageHeight',
      title: 'Hero Image Height',
      type: 'string',
    },
    {
      name: 'heroImageAlt',
      title: 'Hero Image Alt',
      type: 'string',
    },

    {
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'text',
    },
    {
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profilePicAlt',
      title: 'Profile Pic Alt',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },

    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
    {
      name: 'backToTopIcon',
      title: 'Back to Top Icon',
      description: 'Add a back to top icon, should be around 36x36',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backToTopIconAlt',
      title: 'Back to top icon alt text',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'heroImage',
    },
  },
})
