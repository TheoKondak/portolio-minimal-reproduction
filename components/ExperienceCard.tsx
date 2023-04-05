import Image from 'next/image';
import { motion } from 'framer-motion';

import { urlFor } from '@/sanity';

import { Experience, Skill } from '@/typings';

import Link from 'next/link';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-full md:w-[600px] snap-center bg-[#292929] px-2 py-2 md:p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden mx-2">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        // src="./google-icon.webp"
        src={urlFor(experience?.companyImage).url()}
        alt={`${experience?.company} logo`}
        className=" md:rounded-full w-[120px] h-[120px] 2xl:w-[200px] 2xl:h-[200px] object-cover object-center"
      />

      <div className="w-full">
        <h4 className="text-2xl 2xl:text-4xl text-center font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-xl 2xl:text-2xl flex justify-center mt-1">{experience?.company}</p>
        <div className="flex justify-center items-center flex-wrap space-x-2 my-2 w-5/6 mx-auto">
          {experience?.technologies.map((technology) => (
            <div key={technology?._id}>
              {technology.website ? (
                <Link href={technology.website} title={`Visit ${technology?.title} website`} target="_blank" rel="noopener noreferrer" className="rounded-full">
                  <Image className="w-6 h-6 2xl:w-8 2xl:h-8" src={urlFor(technology.image).url()} alt={technology?.title} width={technology.width ? Number(technology.width) : 24} height={technology.height ? Number(technology.height) : 24} />
                </Link>
              ) : (
                <Image className="w-6 h-6 2xl:w-8 2xl:h-8" src={urlFor(technology.image).url()} alt={`${technology?.title} logo`} width={20} height={20} />
              )}
            </div>
          ))}
        </div>

        <p className="uppercase pb-5 flex justify-center text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="h-auto pb-[50%] md:pb-[55%] 2xl:pb-[100%] overflow-hidden relative">
          <ul className="list-disc ml-5 text-lg  text-white h-full overflow-y-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80 scrollbar-thin scrollbar-thumb-rounded-md mb-10 shadow-inset-top absolute  top-0 bottom-0">
            {experience.points.map((point, i) => (
              <li key={point ? i.toString() + point.toString() : i.toString()}>{point.toString()}</li>
            ))}
          </ul>
          {/* Padding bottom so the whole content of the UL is scrollable. Otherwise the last part is hidden */}
          <div className="pb-[24%] md:pb-0"></div>
        </div>
      </div>
    </article>
  );
}
