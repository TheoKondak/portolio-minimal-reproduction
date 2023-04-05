import { useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

// React Social Icons
import { SocialIcon } from 'react-social-icons';

// Fonts
import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css';

import { urlFor } from '@/sanity';

import ReactGA from 'react-ga4';
import CookieConsent from 'react-cookie-consent';

// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

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
  // const seo: SettingsSeo = siteSettings ? siteSettings.filter((item) => item._id === 'seo')[0] : null;
  const { favicon, siteTitle, metaDescription, ogTitle, ogDescription, ogImage }: SettingsSeo | any = siteSettings[4];

  // const cookieConcentSettings: any = siteSettings.filter((item) => item._id === 'cookieConcent')[0];
  const { enableCookieConcent, enableCookieConcentDebug }: CookieConcentSettings | any = siteSettings[1];

  // // reCaptcha3
  // const reCaptcha3Settings: any = siteSettings.filter((item) => item._id === 'reCaptcha3')[0];
  const { recaptchaEnabled, secretKey, siteKey }: GoogleAnalytics4Settings | any = siteSettings[3];

  // // colors
  // const colorSettings: any = siteSettings.filter((item) => item._id === 'colors')[0];
  const { actionColor, danger, primaryColor, secondaryColor, successColor, textColor }: any = siteSettings[0];
  console.log(primaryColor);
  // // googleAnalytics4
  // const googleAnalytics4Settings: any = siteSettings.filter((item) => item._id === 'googleAnalytics4')[0];
  const { gaTag, googleAnalyticsEnabled } = siteSettings[2];

  // // Load Google Tracking Code
  gaTag && googleAnalyticsEnabled && cookieConcent && ReactGA.initialize(gaTag);

  return (
    <div
      className={`text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80 scrollbar-thumb-rounded-md`}
      style={{
        background: primaryColor ? primaryColor : 'rgb(125,36,36)',
      }}>
      <Head>
        <title>{siteTitle ? siteTitle : 'Portfolio Page Title'}</title>
        <meta name="description" content={metaDescription ? metaDescription : "This is the Portfolio's default meta Description"} key="desc" />
        <meta property="og:title" content={ogTitle ? ogTitle : siteTitle ? siteTitle : 'Portfolio Project'} />
        <meta property="og:description" content={ogDescription ? ogDescription : metaDescription ? metaDescription : 'This is the default meta description for the Portfolio Project'} />
        <meta property="og:image" content={ogImage ? urlFor(ogImage).url() : ''} />
        <link rel="icon" href={favicon ? urlFor(favicon).url() : '/favicon.ico'} />
      </Head>
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="work-experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>

      <footer id="footer" className="sticky bottom-12 sm:bottom-0 w-full z-50">
        {/* <div>
            <SocialIcon url="https:github.com/TheoKondak" fgColor="#F7AB0A" bgColor="transparent" className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer" target="_blank" rel="noopener noreferrer" />
          </div> */}

        {/* <div>
            <SocialIcon url="https:twitter.com/ThKondak" fgColor="#F7AB0A" bgColor="transparent" className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer" target="_blank" rel="noopener noreferrer" />
          </div> */}

        {cookieConcent != null ||
          (!cookieConcent && (
            <div className={`flex items-center justify-center `}>
              <div className="z-30">
                <Link href="#hero" title="Go to Top">
                  <Image src="/avatars/theo-kondak-avatar-transparent-orange-bg.svg" alt="Theodoros Kondakos silhouette" width="30" height="30" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
                </Link>{' '}
              </div>
            </div>
          ))}

        {enableCookieConcent && googleAnalyticsEnabled && cookieConcent && (
          <CookieConsent
            onAccept={(acceptedByScrolling) => {
              setCookieConcent(true);
              // if (acceptedByScrolling) {
              //   // triggered if user scrolls past threshold
              //   setCookieConcent(true);
              //   alert('Accept was triggered by user scrolling');
              // } else {
              //   setCookieConcent(true);
              //   alert('Accept was triggered by clicking the Accept button');
              // }
            }}
            onDecline={() => {
              setCookieConcent(false);
            }}
            enableDeclineButton
            flipButtons
            buttonText="I understand"
            // cookieName="YourCookieName"
            // containerClasses="alert alert-warning col-lg-12"
            contentClasses="cookieConcentContent"
            expires={450}
            disableStyles={true}
            // overlay={true}
            debug={enableCookieConcentDebug ? true : false}>
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        )}
      </footer>

      {/* {enableCookieConcent && <div className={`overlay ${cookieConcent === null ? `block bg-[${primaryColor}]/20 backdrop-blur-sm z-40` : 'hidden'} w-full h-screen absolute top-0 left-0 right-0 bottom-0`}></div>} */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  //  TODO Fix pageInfo Type
  const pageInfo: PageInfo | any = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
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
