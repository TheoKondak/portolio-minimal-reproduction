import Link from 'next/link';

import { SkillType, Technology } from '@/typings';

import { motion } from 'framer-motion';

import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skill: SkillType | Technology;
  order: number;
};

const Skill = ({ skill, directionLeft, order }: Props) => {
  const tailwindIconSize = '10';
  const tailwindIconSizeXl = '20';
  const iconSize = '50';

  return skill?.website ? (
    <div className={`z-30 group relative flex cursor-`}>
      <motion.img
        initial={{
          y: directionLeft ? -100 : 100,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 + order * 0.06 }}
        // whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image.asset).url()}
        alt={skill?.title}
        className={`rounded-full border border-gray-500 object-cover w-${tailwindIconSize} h-${tailwindIconSize} xl:w-${tailwindIconSizeXl} xl:h-${tailwindIconSizeXl} filter group-hover:grayscale transition duration-300 ease-in-out p-1`}
        style={{
          maxWidth: '60px',
          maxHeight: '60px',
        }}
        width={iconSize}
        height={iconSize}
      />

      <div className={`absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-${tailwindIconSize} h-${tailwindIconSize} xl:w-${tailwindIconSizeXl} xl:h-${tailwindIconSizeXl} rounded-full z-0`}>
        <Link href={skill?.website} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center h-full">
            <p className="text-xs font-medium text-black opacity-100">{skill?.title}</p>
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <div className={`z-30 group relative flex cursor-pointer`}>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image.asset).url()}
        alt={skill?.title}
        className={`rounded-full border border-gray-500 object-cover w-${tailwindIconSize} h-${tailwindIconSize} xl:w-${tailwindIconSizeXl} xl:h-${tailwindIconSizeXl} filter group-hover:grayscale transition duration-300 ease-in-out p-1`}
        width={skill?.width ? Number(skill?.width) : Number(iconSize)}
        height={skill?.height ? Number(skill?.height) : Number(iconSize)}
      />

      <div className={`absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-${tailwindIconSize} h-${tailwindIconSize} xl:w-${tailwindIconSizeXl} xl:h-${tailwindIconSizeXl} rounded-full z-0`}>
        <div className="flex items-center justify-center h-full">
          <p className="text-xs font-medium text-black opacity-100">{skill?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
