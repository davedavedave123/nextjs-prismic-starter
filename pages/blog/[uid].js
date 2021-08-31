import React, { useEffect } from 'react';
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks';
import { RichText } from 'prismic-reactjs';

import { Client } from '../../utils/prismicHelpers';
import Gallery from '../../components/blog/Gallery';
import ImageCover from '../../components/ImageCover';

export default function BlogPage(props) {
  const { data } = props;
  // const {
  //   data: { gallery, featured_image, title, content },
  // } = props;

  useEffect(() => {
    console.log('blog data', data);
  }, []);

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto'>
        <article className='pt-20'>
          <h1 className='py-10'>{RichText.asText(data.title)}</h1>

          <div className='py-14'>
            <ImageCover
              src={data.featured_image.url}
              alt={data.featured_image.alt}
              width={data.featured_image.dimensions.width}
              height={data.featured_image.dimensions.height}
            />
          </div>
          <div className='py-14 text-lg'>
            <RichText render={data.content} />
          </div>
          <Gallery gallery={data.gallery} />
        </article>
      </div>
    </div>
  );
}

export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: 'repeat',
  type: 'blog',
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'blog',
  formatPath: prismicDocument => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});
