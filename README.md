## The video:

https://www.youtube.com/live/urgi2iz9P6U?feature=share

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Issues

### Current Issues

- Experience Dates need to include Month and year only

### Fixed Issues


### Roadmap

- Add Google Analytics https://www.npmjs.com/package/nextjs-google-analytics
- Add Microbloging section
- Add a better implementation for sending an email
- Add Recaptcha to the email form

### Sources:

- [Sanity Tailwind issue](https://github.com/sanity-io/sanity/issues/3884)
- [Add sanity.io CDN to next.config.js to resolve issue with Image](https://github.com/vercel/next.js/issues/23590#issuecomment-838171591)
- [Enable Mermaid Syntax rendering ](https://www.andynanopoulos.com/blog/how-to-integrate-next-react-mermaid-markdown)
- [Error: Cannot find module 'sanity' or its corresponding type declarations](https://github.com/vercel/next.js/discussions/44451)
- [Type error: Argument of type '{ projectId: string | undefined; }' is not assignable to parameter of type 'SCL| SPD | undefined'](https://stackoverflow.com/questions/73980383/type-error-argument-of-type-projectid-string-undefined-is-not-assigna)