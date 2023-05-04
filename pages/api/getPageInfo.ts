import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types
import { PageInfo } from '../../typings';

const query = groq`
*[_type == 'pageInfo'][0]
`;

type Data = {
  pageInfo: PageInfo[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  console.log('Requesting Experiences');
  try {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    console.log('---');
    console.log(req);
    console.log('---');
    console.log(res);
    console.log('---');
    console.log(pageInfo);
    console.log('---');
    res.status(200).json({ pageInfo });
  } catch (err) {
    console.log('Fetching data failed', err);
    res.status(500).json({ error: 'Fetching data failed' });
  }
}
