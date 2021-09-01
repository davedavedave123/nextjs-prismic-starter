import React, { useEffect } from 'react';
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks';
import { RichText } from 'prismic-reactjs';
import Prismic from '@prismicio/client';

import TaggedPosts from '../../components/blog/TaggedPosts';
import { Client } from '../../utils/prismicHelpers';
import Gallery from '../../components/blog/Gallery';
import ImageCover from '../../components/ImageCover';

export default function BlogPage(props) {
  const { data } = props;
  // const {
  //   data: { gallery, featured_image, title, content },
  // } = props;

  // const getTags = async () => {
  //   console.log('gettings tags');
  //   const tags = await Client().getTags('tractors');
  //   console.log('tags:', tags);
  // };

  useEffect(() => {
    console.log('blog props', props);
    // getTags();
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
        <TaggedPosts posts={props.taggedArticles} />
      </div>
    </div>
  );
}

// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   queryType: 'repeat',
//   type: 'blog',
//   apiParams({ params }) {
//     console.log('params uid:', params.uid);
//     return {
//       uid: params.uid,
//     };
//   },
// });

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;

  const client = Client();

  console.log('params uid:', params.uid);

  const doc = await client.getByUID('blog', params.uid);

  // use Prismic.Predicates.at to target posts that specifically contain those tags
  const taggedArticles =
    doc.tags.length > 0
      ? await client.query(Prismic.Predicates.any('document.tags', doc.tags), {
          pageSize: 8,
        })
      : [];

  return {
    props: {
      ...doc,
      taggedArticles: taggedArticles?.results ? taggedArticles.results : [],
      preview,
    },
  };
}

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
