import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

import { Experience } from '@/typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col md:flex-row justify-evenly items-center text-center md:text-left   mx-auto overflow-hidden max-w-full scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">Experience</h3>

      <div className="w-full relative top-20 h-5/6 flex md:space-x-5 overflow-x-scroll px-2 py-4 md:p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80 scrollbar-thin">
        {experiences?.map((experience) => {
          // console.log(experience);
          return <ExperienceCard key={experience._id} experience={experience} />;
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
