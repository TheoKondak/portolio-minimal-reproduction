'use client';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
// import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/sanity';

// Types
import { PageInfo } from '@/typings';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi! I am ${pageInfo?.name}!`, `<AndILoveToCode />`],
    loop: false,
    delaySpeed: 3000,
  });
  // console.log(pageInfo);
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image src={urlFor(pageInfo?.heroImage).url()} className="relative rounded-full h-auto w-44 mx-auto" alt="Theo" width={Number(pageInfo?.heroImageWidth)} height={Number(pageInfo?.heroImageHeight)} />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo?.role}</h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" cursorStyle="_" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#work-experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contact">
            <button className="heroButton">Contact Me</button>
          </a>
          {/* <a href="#micro-blog">
            <button className="heroButton">Micro-Blog</button>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
