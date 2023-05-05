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
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-white text-2xl  my-2">Minimal Reproduction</h1>

      <div className="flex flex-col justify-center align-center gap-5 max-w-max mx-auto">
        <span className="text-white text-center p-1 px-4 flex flex-col justify-center align-center">The issue occurs when visiting a non existing route for example {process.env.NEXT_PUBLIC_BASE_URL}/nonExistingRoute</span>

        <span className="text-white text-center p-1 px-4 flex flex-col justify-center align-center">But it does not occur on some other route, where I use notFound() </span>

        <Link className="text-white text-center p-1 border border-white" href={`${process.env.NEXT_PUBLIC_BASE_URL}/experiences/150833ed-3c26-4242-aa21-7101c46692da`} title="Sample">
          Sample Blog Post Route
          <small>The post exists</small>
        </Link>
        <Link className="text-white text-center p-1 border border-white flex flex-col justify-center align-center" href={`${process.env.NEXT_PUBLIC_BASE_URL}/experiences/nonExistingRoute`} title="Sample">
          Non Existing Blog Post Route (post)
          <small>The error does not occur</small>
        </Link>
      </div>
    </div>
  );
}
