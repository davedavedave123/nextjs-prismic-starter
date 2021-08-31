import React, { useRef } from 'react';
import { RichText } from 'prismic-reactjs';

// componants
import ImageCover from '../ImageCover';
import trimText from '../../utils/trimText';
import Link from 'next/link';
import { linkResolver } from '../../prismic-configuration';
import useBreakPoints from '../../hooks/useBreakPoints';

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

const Text = ({ title, content }) => {
  return (
    <div
      className={`relative w-full h-full p-20 flex justify-center items-center`}
    >
      <div className='relative text-center'>
        <h2 className='p-0 m-0'>{RichText.asText(title)}</h2>
        <div className='w-20 h-1 bg-yellow-300 mx-auto my-5' />
        <p>{trimText(content[0].text, 200)}</p>
      </div>
    </div>
  );
};

const Screen = () => (
  <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40' />
);

const Text_mobile = ({ title, content }) => (
  <div className={`absolute w-full h-full top-0 left-0`}>
    <div className='relative w-full h-full p-10 flex justify-center items-center'>
      <Screen />
      <div className='relative text-center text-white'>
        <h2 className='p-0 m-0'>{RichText.asText(title)}</h2>
        <div className='w-20 h-1 bg-yellow-300 mx-auto my-5' />
        <p>{trimText(content[0].text, 200)}</p>
      </div>
    </div>
  </div>
);

export default function BlogLink({ blog, index }) {
  const { data } = blog;
  const { isLgDown } = useBreakPoints();

  return (
    <Link href={linkResolver(blog)}>
      <a className='w-full relative lg:grid grid-cols-2 grid-rows-1'>
        {/* For mobile */}
        {isLgDown && (
          <div className='relative w-full'>
            <FeaturedImage image={data.featured_image} />
            <Text_mobile title={data.title} content={data.content} />
          </div>
        )}
        {/* For alternating image/text sides */}
        {index % 2 == 0 && !isLgDown ? (
          <>
            <FeaturedImage image={data.featured_image} />
            <Text title={data.title} content={data.content} />
          </>
        ) : index % 2 != 0 && !isLgDown ? (
          <>
            <Text title={data.title} content={data.content} />
            <FeaturedImage image={data.featured_image} />
          </>
        ) : null}
      </a>
    </Link>
  );
}
