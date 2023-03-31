import { createClient } from 'next-sanity';
// import createImageUrlBuilder from '@sanity/image-url';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'chvg577r',
  apiVersion: '2021-10-21',
  // useCdn: true,
  // useCdn: process.env.NODE_ENV === 'production',
  useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === 'production',
};

export const sanityClient = createClient(config);

// export const urlFor = (source: any) => {
//   createImageUrlBuilder(config).image(source);
// };

const builder = imageUrlBuilder(config);

export function urlFor(source: any) {
  return builder.image(source);
}
