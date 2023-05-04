import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type Props = {
  content: string | undefined;
};

const PostBody = ({ content }: Props) => {
  return (
    <div id="postBodyContainer" className="z-10 text-white  max-w-[1200px] mx-auto text-xl px-4 md:px-10 pb-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="">
        {content ? content : 'No content found'}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
