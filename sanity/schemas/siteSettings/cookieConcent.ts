import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

// WIP: need to create new fetch requests, and add data to the components

export default defineType({
  name: 'cookieConcent',
  title: 'Cookie Concent',
  type: 'document',
  fields: [
    {
      name: 'enableCookieConcent',
      title: 'Enable Cookie Concent',
      description: 'WIP: no functionality',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'enableCookieConcentDebug',
      title: 'Enable Cookie Concent Debug',
      description: 'WIP: no functionality',
      type: 'boolean',
      initialValue: false,
    },
  ],
})
