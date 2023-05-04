import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';

// Types
import { Experience } from '../../../typings';

type Data = {
  experience: Experience;
};

type Params = {
  params: { id: string };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  console.log('Requesting Experiences');

  console.log();

  const query = groq`
  *[_type == 'experience' && _id == '${req.query._id}']{
    ...,
    technologies[]->
  }[0]
  `;

  try {
    const experience: Experience = await sanityClient.fetch(query);
    console.log('---');
    console.log(req);
    console.log('---');
    console.log(res);
    console.log('---');
    console.log(experience);
    console.log('---');

    res.status(200).json({ experience });
  } catch (err) {
    console.log('Fetching data failed', err);
    res.status(500).json({ error: 'Fetching data failed' });
  }
}
