import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

// Types
import { Skill } from '../../typings';

const query = groq`
*[_type == 'skill']
`;

type Data = {
  skills: Skill[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });

  if (Number(res.status) < 400) {
    console.log('Fetched successfully!');
    console.log(skills);
  } else {
    console.log(`Error occurred fetching Settings status code`);
  }
  console.log('---');
  console.log(req);
  console.log('---');
  console.log(res);
  console.log('---');
  console.log(skills);
  console.log('---');
}
