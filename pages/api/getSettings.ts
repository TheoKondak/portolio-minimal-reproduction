import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types

// const query = groq`*[_type in ["reCaptcha3", "seo", "colors",'googleAnalytics4',"cookieConcent"]]`;
const query = groq`*[_type in ["reCaptcha3", "seo", "colors",'googleAnalytics4',"cookieConcent"]]`;

type Data = {
  settings: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  console.log('Requesting Settings');

  try {
    const settings: any = await sanityClient.fetch(query);
    console.log('---');
    console.log(req);
    console.log('---');
    console.log(res);
    console.log('---');
    console.log(settings);
    console.log('---');

    res.status(200).json({ settings });
  } catch (err) {
    console.log('Fetching data failed', err);
    res.status(500).json({ error: 'Fetching data failed' });
  }
}
