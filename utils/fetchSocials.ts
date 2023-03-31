import { Social } from '../typings';

// import axios from 'axios';

export const fetchSocials = async () => {
  // const resAxios = axios(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/getSocials`).then((resp) => {
  //   return resp.data;
  // });
  // const dataAxios = await resAxios;
  // const socials: Social[] = dataAxios.socials;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000'}/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;
  return socials;
};
