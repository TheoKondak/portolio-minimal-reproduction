export const settingsStructure = (S) =>
  S.list()
    .title('Portfolio Admin')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem().title('SEO').child(S.document().schemaType('seo').documentId('seo')),
              S.listItem()
                .title('Google Recaptcha 3 Settings')
                .child(S.document().schemaType('reCaptcha3').documentId('reCaptcha3')),
              S.listItem()
                .title('Google Analytics 4 Settings')
                .child(S.document().schemaType('googleAnalytics4').documentId('googleAnalytics4')),
              S.listItem()
                .title('Cookie Concent')
                .child(S.document().schemaType('cookieConcent').documentId('cookieConcent')),
              // S.listItem()
              //   .title('Author')
              //   .child(S.document().schemaType('author').documentId('colors')),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['seo', 'colors', 'reCaptcha3', 'googleAnalytics4', 'cookieConcent'].includes(
            listItem.getId()
          )
      ),
    ])
