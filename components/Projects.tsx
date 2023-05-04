'use client';
// import Image from 'next/image';

import { motion } from 'framer-motion';
import Project from './Project';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const projectsLength = projects.length.toString();

  return (
    <motion.div className="h-screen relative flex flex-col md:flex-row justify-evenly items-center mx-auto overflow-hidden text-left max-w-full z-0">
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl xl:space-y-0 mx-auto">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80scrollbar-thumb-rounded-md">
        {projects.map((project, i) => (
          <Project key={i} index={i} project={project} projectsLength={projectsLength} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f2AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
