import { useState } from 'react';

// Fonts
import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css';

// Fetch
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchSettings } from '../utils/fetchSettings';

const inter = Inter({ subsets: ['latin'] });

// Types
import { Experience, PageInfo, Project, Skill, Social, SettingsSeo, CookieConcentSettings, GoogleAnalytics4Settings } from '../typings';
// import { Social } from '../typings';
import { GetStaticProps } from 'next';

type Props = {
  pageInfo: PageInfo | any;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  siteSettings: [] | any;
};

// export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
export default function Home({ experiences, pageInfo, projects, skills, socials, siteSettings }: Props) {
  const [cookieConcent, setCookieConcent] = useState<boolean | null>(null);

  // Destructuring site settings

  // siteSettings fetches some site settings from a groq query (see getSettings.ts) from Sanity.
  // The Query works fine when testing in Sanity studio vision, in localhost, and when deployed on Preview. When trying to deploy on Production I get errors.
  // Other requests done with the same way, are working fine on Production.

  // const colorSettings: any = siteSettings.filter((item) => item._id === 'colors')[0];
  const { actionColor, danger, primaryColor, secondaryColor, successColor, textColor }: any = siteSettings[0];
  console.log(primaryColor);

  return <div></div>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  //  TODO Fix pageInfo Type
  const pageInfo: PageInfo | any = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  // Up to this everything works fine. The problem exists on siteSettings only.
  const siteSettings: any = await fetchSettings();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      siteSettings,
    },
    revalidate: 10,
  };
};
