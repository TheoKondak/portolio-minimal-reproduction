'use client';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.6, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center">
      {/* <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping opacity-50"></div> */}
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52"></div>
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52"></div>
      <div className="rounded-full border-[#f7ab0a] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse"></div>
      <div className="absolute border border-[#333333] rounded-full h-[750px] w-[750px] mt-52"></div>
    </motion.div>
  );
}

export default BackgroundCircles;
