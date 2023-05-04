'use client';

import PostCover from './PostCover';
import PostHeader from './PostHeader';
import PostHeaderExperience, { ExperiencePostMetadata } from './PostHeaderExperience';
import PostBody from './PostBody';

import { PostData, PostSettings } from '@/typings';
import BackToHome from '../BackToHome';

type Props = {
  postSettings: PostSettings;
  post: PostData | ExperiencePostMetadata | any;
  postType: 'experience' | 'project' | 'blog post';
};

const Post = ({ postSettings, post, postType }: Props) => {
  const { colors, favicon } = postSettings;
  const { title, imageSrc, imageAlt, pageTitle, metaDescription, ogTitle, ogDescription, ogImage } = post;

  // console.log(Object.keys(post));

  if (postType === 'experience') {
    return (
      <div>
        <article>
          <PostCover imageSrc={imageSrc} imageAlt={imageAlt} settings={colors} />
          <BackToHome />

          <PostHeaderExperience postMetadata={post} postSettings={{ wpm: 100 }} />

          <PostBody content={post.content} />
          {/* <div className="post absolute top-0 max-w-[1200px] w-full mx-auto"></div> */}
        </article>
      </div>
    );
  } else if (postType === 'project') {
    return (
      <div className="text-white">
        <h1>Project page is under construction</h1>
      </div>
    );
  } else if (postType === 'blog post') {
    return (
      <div className="text-white">
        <h1>Blog posts are under construction</h1>
      </div>
    );
  } else {
    return (
      <div className="text-white">
        <h1>Unknown Post Type</h1>
      </div>
    );
  }
};

export default Post;
