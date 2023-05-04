'use client';
import { motion } from 'framer-motion';
import Skill from './Skill';

import { SkillType } from '@/typings';

type Skills = {
  skills: SkillType[] | undefined;
};

const Skills = ({ skills }: Skills) => {
  return (
    <motion.div className="h-screen min-h-screen relative flex flex-col items-center justify-center text-center md:text-left xl:flex-row m-w-[1000px] xl:px-10 overflow-hidden">
      <h3 className=" uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl xl:space-y-0 mx-auto">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Technologies that I have worked with in the past</h3>

      <div className="w-[90%] md:w-[800px] grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-5 px-4  absolute md:static top-[26%] md:top-0 md:overflow-y-hidden overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80 scrollbar-thin scrollbar-thumb-rounded-md">
        {skills &&
          skills.map((skill, i) => {
            return <Skill key={skill._id} skill={skill} order={i} />;
          })}
      </div>
    </motion.div>
  );
};

export default Skills;
