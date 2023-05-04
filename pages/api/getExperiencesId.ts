import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types
import { Experience } from '../../typings';

const query = groq`
*[_type == 'experience']._id
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string } | any>) {
  console.log('Requesting Experiences IDs');
  try {
    const experiencesId: Array<string> = await sanityClient.fetch(query);
    console.log('---');
    console.log(req);
    console.log('---');
    console.log(res);
    console.log('---');
    console.log(experiencesId);
    console.log('---');

    res.status(200).json({ experiencesId });
  } catch (err) {
    console.log('Fetching data failed', err);
    res.status(500).json({ error: 'Fetching data failed' });
  }
}
