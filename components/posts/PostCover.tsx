import Image from 'next/image';
import { PostColors } from '@/typings';

type PostCover = {
  imageSrc: string | undefined;
  imageAlt: string | undefined;
  settings: PostColors | undefined;
};

const PostCover = ({ imageSrc, imageAlt, settings }: PostCover) => {
  // console.log(settings);
  return (
    <div id="backgroundContainer" className="w-full h-full max-h-[1000px] absolute overflow-hidden -z-10">
      <Image src={imageSrc ? imageSrc : '/posts/defaultPostCoverResized.jpg'} alt={imageAlt ? imageAlt : 'Raphael, School of Athens, fresco, 1509-1511 (Stanza della Segnatura, Papal Palace, Vatican)'} width="1200" height="1200" className="-z-10 absolute right-0 max-w-[100vw] object-cover object-left w-full h-full " />
      <div
        id="backgroundOverlay"
        className="-z-10 h-[200%] w-[200%] -top-[100%] -left-[100%] absolute"
        style={{
          background: 'radial-gradient(ellipse closest-side,rgba(28,30,44,0.4), rgba(18, 6, 31, 1))',
        }}></div>
    </div>
  );
};

export default PostCover;
