import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

// WIP: need to create new fetch requests, and add data to the components

export default defineType({
  name: 'googleAnalytics4',
  title: 'Google Analytics 4 Settings',

  type: 'document',
  fields: [
    {
      title: 'Enable Google Analytics 4',
      name: 'googleAnalyticsEnabled',
      description:
        'Setting Google analytics keys as environment variables will override this setting',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'gaTag',
      title: 'Google Analytics Tracking Code',
      description:
        'Google analytics 4 and above are supported. Google Tracking code has the following format: G-XXXXXXXXXX ',
      type: 'string',
    },
  ],
})
