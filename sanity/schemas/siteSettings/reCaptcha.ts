import {defineField, defineType} from 'sanity'
// import {defineField, defineType} from 'sanity/lib/exports'

// WIP: need to create new fetch requests, and add data to the components

export default defineType({
  name: 'reCaptcha3',
  title: 'Google Recaptcha 3 Settings',
  type: 'document',
  fields: [
    {
      title: 'Recaptcha Enabled',
      name: 'recaptchaEnabled',
      description: 'WIP: no functionality',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'siteKey',
      title: 'Site Key',
      description:
        'Set the site key here. Alternatively use env variable to save a key `NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY`',
      type: 'string',
    },
    {
      name: 'secretKey',
      title: 'Secret Key',
      description:
        'Set the secret key here. Alternatively use env variable to save a key `NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY`',
      type: 'string',
    },
  ],
})
