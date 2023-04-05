import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types

const query = groq`
*[_type in ["reCaptcha3", "seo", "colors",'googleAnalytics4',"cookieConcent"]]
`;

type Data = {
  settings: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('Requesting Settings');
  const settings: any = await sanityClient.fetch(query);
  console.log(settings);
  res.status(200).json({ settings });
}
