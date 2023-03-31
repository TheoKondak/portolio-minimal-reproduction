### Summary

## I am working on my portfolio, which is in a **private repository**. 

The app is pretty straightforward. It displays some data fetched from Sanity.

## I use Sanity for hosting some data. 

Everything seems to work fine with Sanity. There was some strange behavior, where when running build it could not find `sanity` to import various methods, and had to use an alternative import. The solution I adopted was this [one](https://stackoverflow.com/questions/75175242/module-sanity-has-no-exported-member-defineconfig). 

## I use NextJs 13.1.6

Also, I used vite to create the app.

The folder structure of the `pages/` is:
- `api/`
  - `fetchData.ts`
- `_app.tsx`
- `index.tsx`


Everything works fine on local dev. 

It also successfully builds if i run `vercel build` for the first time. If I try to run build again, it gets stuck on `info - Creating an optimized production build ...` . If i delete `.next/` it runs again without being stuck.

When I try to deploy though, I keep getting an error, and I can't figure out what to do. 


### Additional information

Here are the deployment logs running `vercel deploy` with no previous build or cache.
```
info  - Linting and checking validity of types...
2023-03-30T10:23:47.403Z  info  - Creating an optimized production build...
2023-03-30T10:23:55.799Z  info  - Compiled successfully
2023-03-30T10:23:55.799Z  info  - Collecting page data...
2023-03-30T10:24:00.158Z  info  - Generating static pages (0/3)
2023-03-30T10:24:00.698Z
2023-03-30T10:24:00.699Z  Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
2023-03-30T10:24:00.699Z  TypeError: Failed to parse URL from undefined/api/getPageInfo
2023-03-30T10:24:00.699Z      at Object.fetch (node:internal/deps/undici/undici:14062:11)
2023-03-30T10:24:00.699Z      at async fetchPageInfo (/vercel/path0/.next/server/pages/index.js:1229:17)
2023-03-30T10:24:00.699Z      at async getStaticProps (/vercel/path0/.next/server/pages/index.js:1147:22)
2023-03-30T10:24:00.700Z      at async renderToHTML (/vercel/path0/node_modules/next/dist/server/render.js:385:20)
2023-03-30T10:24:00.700Z      at async /vercel/path0/node_modules/next/dist/export/worker.js:286:36
2023-03-30T10:24:00.700Z      at async Span.traceAsyncFn (/vercel/path0/node_modules/next/dist/trace/trace.js:79:20)
2023-03-30T10:24:00.700Z  info  - Generating static pages (3/3)
2023-03-30T10:24:00.702Z
2023-03-30T10:24:00.703Z  > Build error occurred
2023-03-30T10:24:00.704Z  Error: Export encountered errors on following paths:
2023-03-30T10:24:00.705Z        /
2023-03-30T10:24:00.705Z      at /vercel/path0/node_modules/next/dist/export/index.js:415:19
2023-03-30T10:24:00.706Z      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-03-30T10:24:00.706Z      at async Span.traceAsyncFn (/vercel/path0/node_modules/next/dist/trace/trace.js:79:20)
2023-03-30T10:24:00.706Z      at async /vercel/path0/node_modules/next/dist/build/index.js:1400:21
2023-03-30T10:24:00.706Z      at async Span.traceAsyncFn (/vercel/path0/node_modules/next/dist/trace/trace.js:79:20)
2023-03-30T10:24:00.706Z      at async /vercel/path0/node_modules/next/dist/build/index.js:1259:17
2023-03-30T10:24:00.706Z      at async Span.traceAsyncFn (/vercel/path0/node_modules/next/dist/trace/trace.js:79:20)
2023-03-30T10:24:00.707Z      at async Object.build [as default] (/vercel/path0/node_modules/next/dist/build/index.js:66:29)
2023-03-30T10:24:00.755Z  Error: Command "npm run build" exited with 1
2023-03-30T10:24:01.472Z
```

If I build locally and then try to `vercel --prebuilt` I get this error:

```
[13:57:01.020] Running build in Cleveland, USA (East) – cle1
[13:57:01.072] Retrieving list of deployment files...
[13:57:01.533] Previous build caches not available
[13:57:01.990] Downloading 2408 deployment files...
[13:57:06.545] Using prebuilt build artifacts...
[13:57:06.564] [Error: ENOENT: no such file or directory, stat '/vercel/path0/.vercel/output/functions/_next/data/ZHzGubdQyDvpEPDV5RW0K/index.json.func'] {
[13:57:06.565]   errno: -2,
[13:57:06.565]   code: 'ENOENT',
[13:57:06.565]   syscall: 'stat',
[13:57:06.565]   path: '/vercel/path0/.vercel/output/functions/_next/data/ZHzGubdQyDvpEPDV5RW0K/index.json.func'
[13:57:06.565] }
[13:57:06.667] ENOENT: ENOENT: no such file or directory, stat '/vercel/path0/.vercel/output/functions/_next/data/ZHzGubdQyDvpEPDV5RW0K/index.json.func'
```
