import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'colors',
  title: 'Website Colors',
  type: 'document',
  fields: [
    {
      name: 'primaryColor',
      title: 'Primary',
      description: 'This is the basic color of the site, used for background color etc.',
      type: 'string',
      initialValue: 'rgb(36,36,36)',
    },
    {
      name: 'secondaryColor',
      title: 'Secondary',
      description: 'This is the secondary color of the site, used less often',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'actionColor',
      title: 'Action',
      description: 'This is the color used for buttons, sidebar etc.',
      type: 'string',
      initialValue: '#cd950d',
    },
    {
      name: 'textColor',
      title: 'Text',
      description: 'This is primary color used for text',
      type: 'string',

      initialValue: '',
    },
    {
      name: 'successColor',
      title: 'Success',
      description: 'This is the success color. Optional, usually a tone of dark green',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'danger',
      title: 'Danger',
      description: 'This is the danger color. Optional, usually a tone of dark red',
      type: 'string',
      initialValue: '',
    },
  ],
})
