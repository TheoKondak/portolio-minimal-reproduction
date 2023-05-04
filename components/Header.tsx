'use client';
// import Link from 'next/link';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

// Types
import { Social } from '@/typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7-xl z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center">
        {socials.map(({ _id, url }) => {
          return <SocialIcon key={_id} url={url} fgColor="grey" bgColor="transparent" target="_blank" rel="noopener noreferrer" />;
        })}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row  items-center text-gray-300 cursor-pointer">
        <SocialIcon className="cursor-pointer" url="#contact" network="email" fgColor="grey" bgColor="transparent" />
        <a href={`#contact`}>
          <p className="uppercase hidden md:inline-flex text-small text-gray-500">Get In Touch</p>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
