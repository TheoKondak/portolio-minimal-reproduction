import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'siteSettings',
  title: 'Website Settings',
  type: 'document',
  fields: [
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Ideal favicon size: 16x16',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'siteTitle',
      title: 'Website Title',
      description: 'Put a website title. Should not be more than 50–60 characters',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Website Meta Description',
      description: 'Put a website meta description. Should not be more than 150-160 characters',
      type: 'text',
    },
    {
      name: 'ogTitle',
      title: 'og Title',
      description: 'The title of your article without any branding such as your site name.',
      type: 'string',
    },
    {
      name: 'ogDescription',
      title: 'og Description',
      description:
        'A brief description of the content, usually between 2 and 4 sentences. This will displayed below the title of the post on Facebook.',
      type: 'text',
    },
    {
      name: 'ogImage',
      title: 'og Image',
      type: 'image',
      description:
        'The URL of the image that appears when someone shares the content to Facebook. See below for more info, and check out our best practices guide to learn how to specify a high quality preview image. Use images that are at least 1200 x 630 pixels for the best display on high resolution devices. At the minimum, you should use images that are 600 x 315 pixels to display link page posts with larger images.',
      options: {
        hotspot: true,
      },
    },
  ],
})
