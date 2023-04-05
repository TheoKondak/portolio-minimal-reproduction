import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types

const query = groq`*[_type in ["reCaptcha3", "seo", "colors",'googleAnalytics4',"cookieConcent"]]`;

type Data = {
  settings: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('Requesting Settings from');
  console.log(`Query: ${query}`);
  const settings: any = await sanityClient.fetch(query);
  res.status(200).json({ settings });

  if (Number(res.status) < 400) {
    console.log('Fetched successfully!');
    console.log(settings);
  } else {
    console.log(`Error occurred fetching Settings status code`);
  }
  console.log('---');
  console.log(req);
  console.log('---');
  console.log(res);
  console.log('---');
  console.log(settings);
  console.log('---');
}
