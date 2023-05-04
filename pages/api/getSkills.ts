import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types
import { SkillType } from '../../typings';

const query = groq`
*[_type == 'skill']
`;

type Data = {
  skills: SkillType[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | { error: string }>) {
  console.log('Requesting Experiences');
  try {
    const skills: SkillType[] = await sanityClient.fetch(query);
    console.log('---');
    console.log(req);
    console.log('---');
    console.log(res);
    console.log('---');
    console.log(skills);
    console.log('---');

    res.status(200).json({ skills });
  } catch (err) {
    console.log('Fetching data failed', err);
    res.status(500).json({ error: 'Fetching data failed' });
  }
}
