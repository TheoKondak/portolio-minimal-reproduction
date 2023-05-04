import React, { ReactNode } from 'react';

import Post from '@/components/posts/Post';
import { PostData, PostSettings, PageInfo, Experience } from '@/typings';
import { fetchSettings } from '@/utils/fetchSettings';
import { fetchExperience } from '@/utils/fetchExperience';
import { fetchExperiencesId } from '@/utils/fetchExperiencesId';
import { ExperiencePostMetadata } from '@/components/posts/PostHeaderExperience';
import { notFound } from 'next/navigation';

type Props = {
  post: ExperiencePostMetadata;
  postSettings?: PostSettings;
  params: { id: string };
};

type Params = {
  params: { id: string };
};

export async function generateMetadata({ params }: Params) {
  const post: Experience = { _id: '', title: 'No Title Found for this Work Experience', _type: 'experience', linkToBuild: '', company: 'No Company name found', companyImage: '', dateStarted: 'No Starting date found', dateEnded: null, isCurrentlyWorkingHere: false, jobTitle: 'No Job title found', points: [], technologies: [] };

  // const pageInfo: PageInfo | any = await fetchPageInfo();
  const siteSettings: any = await fetchSettings();
  const { siteTitle, metaDescription }: any = siteSettings[0];
  return {
    title: post.title ? post.title : siteTitle ? siteTitle : 'Default Post Page Title',
    // description: post.metaDescription ? post.metaDescription : metaDescription ? metaDescription : 'Default Post Meta description',
    openGraph: {
      title: post.title ? post.title : siteTitle ? siteTitle : 'Default Post ogTitle',
      // description: post.metaDescription ? post.metaDescription : metaDescription ? metaDescription : 'Default Post ogDescription',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/experiences/${params.id}`,
      siteName: siteTitle ? siteTitle : 'Portfolio Post Default SiteName',
      images: [
        {
          // url: post.ogImage ? post.ogImage : siteSettings.ogImage ? siteSettings.ogImage : `${process.env.NEXT_PUBLIC_BASE_URL}/posts/defaultPostCoverResized.jpg`,
          width: 1200,
          height: 1200,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  };
}

const Page = async ({ params }: Props) => {
  const siteSettings: any = await fetchSettings();
  const seo: any = siteSettings ? siteSettings.filter((item: any) => item._id === 'seo')[0] : null;
  const colors: any = siteSettings.filter((item: any) => item._id === 'colors')[0];
  let post: ExperiencePostMetadata = { title: 'No Title Found', content: 'No Content Found', company: '', dateStarted: null, dateEnded: null, isCurrentlyWorkingHere: false, postDate: null, pageTitle: '', metaDescription: '', ogTitle: '', ogDescription: '', ogImage: '', imageSrc: '', imageAlt: '' };

  const experiencesIds: any = await fetchExperiencesId();
  const experience: Experience = await fetchExperience(params.id);
  // const experiences: Experience[] = await fetchExperiences();
  // console.log(params.id);
  // console.log(Object.keys(experience));

  if (!experience) {
    notFound();
  }

  const postExists = experiencesIds.filter((experienceId: string) => {
    return experienceId === experience._id;
  });

  if (postExists) {
    post = {
      title: experience.jobTitle,
      company: experience.company,
      content: experience.points.map((point: string) => '- ' + point + '\n').join(''),
      // category: 'Job Experience',
      skills: experience.technologies,
      dateStarted: experience.dateStarted,
      dateEnded: experience.dateEnded ? experience.dateEnded : null,
      isCurrentlyWorkingHere: experience.isCurrentlyWorkingHere ? true : false,
      postDate: experience._updatedAt,
      pageTitle: '',
      metaDescription: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      imageSrc: '',
      imageAlt: '',
      // companyImage: experience.companyImage,
    };
  } else {
    notFound();
  }

  return postExists ? <Post post={post} postType="experience" postSettings={{ colors: colors }} /> : <div>I am sorry, I could not find this page</div>;
};

export default Page;
