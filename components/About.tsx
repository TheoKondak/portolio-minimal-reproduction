import { motion } from 'framer-motion';

import { urlFor } from '@/sanity';

// Types
import { PageInfo } from '@/typings';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
      className="h-screen relative flex flex-col  items-center justify-evenly text-center md:text-left  max-w-7xl px-10 mx-auto ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">About</h3>

      <div className=" items-center flex flex-col md:flex-row max-w-4xl px-10 justify-end md:justify-evenly mx-auto h-[70vh] md:h-auto absolute md:static top-44">
        <motion.img
          src={urlFor(pageInfo?.profilePic).url()}
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="-mb-0 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover md:rounded-sm md:w-64 md:h-96"
        />

        <div className="space-y-10 px-0 md:px-4 h-full overflow-hidden">
          <h4 className="text-4xl font-semibold">
            Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
          </h4>
          <p
            className="text-sm px-2 overflow-scroll md:overflow-auto
            ">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
