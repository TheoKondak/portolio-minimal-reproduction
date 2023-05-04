// 'use client';
// import { useState } from 'react';

import Head from 'next/head';

// Fonts
// import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css';

import { urlFor } from '@/sanity';

import ReactGA from 'react-ga4';

// Components
// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import WorkExperience from '@/components/WorkExperience';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';

// // Fetch
// import { fetchPageInfo } from '../utils/fetchPageInfo';
// import { fetchExperiences } from '../utils/fetchExperiences';
// import { fetchProjects } from '../utils/fetchProjects';
// import { fetchSkills } from '../utils/fetchSkills';
// import { fetchSocials } from '../utils/fetchSocials';
// import { fetchSettings } from '../utils/fetchSettings';

// const inter = Inter({ subsets: ['latin'] });

// Types
import { Experience, PageInfo, Project, SkillType, Social, SettingsSeo, CookieConcentSettings, GoogleAnalytics4Settings } from '../typings';
import Link from 'next/link';
// import { Social } from '../typings';

type Props = {
  pageInfo: PageInfo | any;
  experiences: Experience[];
  skills: SkillType[];
  projects: Project[];
  socials: Social[];
  siteSettings: [] | any;
};

// export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
export default async function Home() {
  // const pageInfo: PageInfo | any = await fetchPageInfo();
  // const experiences: Experience[] = await fetchExperiences();
  // const skills: SkillType[] = await fetchSkills();
  // const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchSocials();
  // const siteSettings: any = await fetchSettings();

  return (
    <div>
      <h1 className="text-white text-2xl  my-2">Minimal Reproduction</h1>
      <Link className="text-white p-1 border border-white" href={`${process.env.NEXT_PUBLIC_BASE_URL}/experiences/150833ed-3c26-4242-aa21-7101c46692da`} title="Sample Experience">
        Sample Experience Page
      </Link>
    </div>
  );
}
