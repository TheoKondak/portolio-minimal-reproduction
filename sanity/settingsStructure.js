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

      S.listItem().title('Blog').child(
        S.list()
          // Sets a title for our new list
          .title('Blog Settings')
          // Add items to the array
          // Each will pull one of our new singletons
          .items([
            // S.listItem().title('Post').child(S.document().schemaType('post').documentId('post')),
            // S.listItem()
            //   .title('Posts')
            //   .child(S.document().schemaType('posts').documentId('posts')),
            // S.listItem()
            //   .title('Categories')
            //   .child(S.document().schemaType('categories').documentId('categories')),
            // S.listItem().title('Tags').child(S.document().schemaType('tag').documentId('tag')),
            // S.listItem()
            //   .title('Authors')
            //   .child(S.document().schemaType('author').documentId('author')),
            // S.listItem()
            //   .title('Settings')
            //   .child(S.document().schemaType('blogSettings').documentId('blogSettings')),
          ])
      ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'posts',
            // 'post',
            // 'category',
            // 'tag',
            // 'author',
            // 'blogSettings',
            'seo',
            'colors',
            'reCaptcha3',
            'googleAnalytics4',
            'cookieConcent',
          ].includes(listItem.getId())
      ),
    ])
