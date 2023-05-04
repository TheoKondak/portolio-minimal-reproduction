import { PostData, SkillType } from '@/typings';
// import { motion } from 'framer-motion';
import Skill from '../Skill';

// import Image from 'next/image';
// import { urlFor } from '@/sanity';

export interface ExperiencePostMetadata {
  title: string;
  content: string | undefined;
  skills?: SkillType[];
  // dateStarted: string;
  // dateEnded: string;
  company: string;
  // companyImage?: string;
  dateStarted: Date | null;
  dateEnded: Date | null;
  postDate: Date | null;
  isCurrentlyWorkingHere: boolean;
  pageTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  imageSrc: string;
  imageAlt: string;
}

interface PostSettings {
  wpm: Number | string;
}

interface Props {
  postMetadata: ExperiencePostMetadata;
  postSettings: PostSettings;
}

function PostHeaderExperience({ postMetadata, postSettings }: Props) {
  const { wpm } = postSettings && postSettings;

  const calculateTimeToRead = (content: string, wpm: number | string = 100) => (content.length > 0 ? Math.ceil(content.trim().split(/\s+/).length / Number(wpm)) : 'No content detected');

  const { company, dateStarted, dateEnded, isCurrentlyWorkingHere, content, title, skills } = postMetadata;

  return (
    <div id="header" className="pt-[200px] md:pt-[400px] max-w-[1200px] mx-auto mb-5 px-4 md:px-10 flex items-start justify-center flex-col ">
      {dateStarted && (
        <div className="datePublished pb-4 flex items-start justify-start self-stretch">
          <div>
            {isCurrentlyWorkingHere ? <span className="font-semibold text-white">{`Since ${dateStarted}`}</span> : <span className="font-semibold text-white">{`${dateStarted} - ${dateEnded}`}</span>}
            {/* <span className="font-semibold text-white">{`From ${dateStarted} until ${dateEnded}`}</span> */}
          </div>
        </div>
      )}
      <h1 className="text-postTitle font-extrabold text-white  md:leading-tight lg:leading-[.65] pb-4 z-10 ">
        {`${title}`}

        <div className="">
          <div className="h-6 2xl:w-8 2xl:h-8 w-auto">
            {/* <Image src={urlFor(companyImage).url()} alt={company} width={48} height={48} /> */}

            {/* <motion.img
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
              src={urlFor(companyImage).url()}
              alt={`${company} logo`}
              className=" md:rounded-full w-[120px] h-[120px] 2xl:w-[200px] 2xl:h-[200px] object-cover object-center"
            /> */}
          </div>
          <small className="text-4xl">{company}</small>
        </div>
      </h1>

      <div id="postMetadataContainer" className="flex items-start justify-center flex-col z-10 border-b border-b-white/60">
        <div className="post-metadata-first-column flex items-center justify-start md:justify-center gap-4 w-full md:w-auto flex-wrap md:nowrap">
          <div className="timeToRead flex items-start justify-start flex-col self-stretch w-full md:w-auto">
            <h3 className="text-xl font-semibold text-white/80 pb-1 md:pb-4">Time To read</h3>
            <span className="font-semibold text-white">{calculateTimeToRead(content ? content : '', Number(wpm))} minutes</span>
          </div>

          {/* {tags.length > 0 && (
            <div className="postTags w-full md:w-auto ">
              <h3 className="text-xl font-semibold text-white/80 pb-2 md:pb-4">Tags</h3>
              <div>
                <ul className="flex items-center justify-start md:justify-center gap-2 md:gap-5 ">
                  {tags.map((tag: Tag | Technology) => {
                    return (
                      <li key={tag._id} className="list-none bg-white/10 hover:bg-white/20 active:bg-white/20 border border-white/10 rounded-lg pt-1 pb-2 px-4">
                        <span>TAG</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )} */}

          {skills && (
            // <div className="post-metadata-first-column skills w-full py-6 flex items-center justify-center gap-4 flex-wrap">

            <div className="postTags pb-6 max-w-sm w-full md:w-auto flex flex-col items-start">
              <h3 className="text-xl font-semibold text-white/80 pb-2 md:pb-4">Skills</h3>
              <div className="flex items-center justify-start gap-4 flex-wrap">
                {skills &&
                  skills.map((skill, i) => {
                    return <Skill key={skill._id} skill={skill} order={i} />;
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostHeaderExperience;
