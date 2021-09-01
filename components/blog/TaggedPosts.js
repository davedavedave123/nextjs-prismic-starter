import Link from 'next/link';
import React, { useEffect } from 'react';

import ImageCover from '../ImageCover';
import taggedPostsLinks_adapter from '../../adapters/taggedPostsLinks_adapter';
import trimText from '../../utils/trimText';
import { useRouter } from 'next/router';

const RelatedPost = ({ post }) => (
  <Link href={post.to}>
    <a className='relative h-96 w-60'>
      <div className='w-full h-1/2'>
        <ImageCover
          src={post.image.url}
          width={post.image.dimensions.width}
          height={post.image.dimensions.height}
        />
      </div>
      <div className='w-full h-1/2 py-5'>
        <h5>
          <strong>{post.title.toUpperCase()}</strong>
        </h5>
        <div className='w-full'>{trimText(post.text, 60)}</div>
        <div className='underline text-green-500'>READ MORE</div>
      </div>
    </a>
  </Link>
);

export default function TaggedPosts({ posts, currentUid }) {
  const router = useRouter();

  // format and then filter out the current pages post
  const formattedPosts = taggedPostsLinks_adapter(posts).filter(
    post => post.to !== router.asPath
  );

  if (formattedPosts.length > 0)
    return (
      <div className='w-full py-20'>
        <h4 className='py-5'>Related Posts</h4>
        <div className='w-full grid grid-cols-4 auto-rows-auto'>
          {formattedPosts.map((post, index) => (
            <RelatedPost post={post} key={`tagged-post-${index}`} />
          ))}
        </div>
      </div>
    );

  return null;
}
