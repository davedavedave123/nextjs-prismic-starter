import React, { useRef } from 'react';
import { RichText } from 'prismic-reactjs';

// componants
import ImageCover from '../ImageCover';
import trimText from '../../utils/trimText';
import Link from 'next/link';
import { linkResolver } from '../../prismic-configuration';

const FeaturedImage = ({ image }) => {
  const imgRef = useRef(null);
  return (
    <div
      className='w-full relative'
      style={{
        height: imgRef?.current?.getBoundingClientRect().width || 600,
        maxHeight: '80vh',
      }}
      ref={imgRef}
    >
      <ImageCover
        src={image.url}
        alt={image.alt}
        width={image.dimensions.width}
        height={image.dimensions.height}
      />
    </div>
  );
};

const Text = ({ title, content }) => (
  <div className='w-full h-full p-20 relative flex justify-center items-center'>
    <div className='relative text-center'>
      <h2 className='p-0 m-0'>{RichText.asText(title)}</h2>
      <div className='w-20 h-1 bg-yellow-300 mx-auto my-5' />
      <p>{trimText(content[0].text, 200)}</p>
    </div>
  </div>
);

export default function BlogLink({ blog, index }) {
  const { data } = blog;
  return (
    <Link href={linkResolver(blog)}>
      <a className='w-full relative grid grid-cols-2'>
        {/* for alternating image/text sides */}
        {index % 2 == 0 ? (
          <>
            <FeaturedImage image={data.featured_image} />
            <Text title={data.title} content={data.content} />
          </>
        ) : (
          <>
            <Text title={data.title} content={data.content} />
            <FeaturedImage image={data.featured_image} />
          </>
        )}
      </a>
    </Link>
  );
}
