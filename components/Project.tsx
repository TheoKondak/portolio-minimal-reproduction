import { urlFor } from '@/sanity';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { Project } from '@/typings';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

type Props = {
  project: Project;
  index: number;
  projectsLength: string;
};

const Project = ({ project, index, projectsLength }: Props) => {
  // console.log(project.summary);
  return (
    <div className={`w-screen flex flex-col items-center justify-center flex-shrink-0 snap-center space-y-4 p-5 md:p-44 h-screen`}>
      {project?.image && (
        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{ duration: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // src="/avatars/theo-kondak-avatar-transparent-bg-multicolor-border.png"
          src={urlFor(project.image).url()}
          alt={project.title}
          width="140"
          height="140"
        />
      )}

      <div className="space-y-10 md:px-10 w-full h-4/6">
        <h4 className="text-3xl font-semibold text-center">
          <span className="underline decoration-[#f6ab0a]/50">{`Case Study ${index + 1} of ${projectsLength}`}</span>
          <br />
          {project.title}
        </h4>

        <div className="flex justify-center items-center flex-wrap space-x-2 my-2 w-5/6 mx-auto">
          {project?.technologies.map((technology) => (
            <div key={technology?._id}>
              {technology.website ? (
                <Link href={technology.website} title={`Visit ${technology?.title} website`} target="_blank" rel="noopener noreferrer" className="rounded-full">
                  <Image className="h-10 w-10 " src={urlFor(technology.image).url()} alt={technology?.title} width={technology.width ? Number(technology.width) : 24} height={technology.height ? Number(technology.height) : 24} />
                </Link>
              ) : (
                <Image className="h-10 w-10 " src={urlFor(technology.image).url()} alt={`${technology?.title} logo`} width={20} height={20} />
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-5/6 overflow-y-auto relative scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0a]/80 scrollbar-thin scrollbar-thumb-rounded-md mb-10 shadow-top">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="w-full text-lg text-center md:text-left h-full absolute top-0 bottom-0">
            {project.summary}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Project;
