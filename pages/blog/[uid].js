import React, { useEffect } from 'react';
import { useGetStaticPaths as makeGetStaticPaths } from 'next-slicezone/hooks';
import { RichText } from 'prismic-reactjs';
import Prismic from '@prismicio/client';

import RelatedPosts from '../../components/blog/RelatedPosts';
import { Client } from '../../utils/prismicHelpers';
import Gallery from '../../components/blog/Gallery';
import ImageCover from '../../components/ImageCover';
import ImageCover_prisimic from '../../components/ImageCover_prismic';

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
    <div className='w-full px-5'>
      <div className='max-w-7xl mx-auto'>
        <article className='pt-20'>
          <h1 className='py-10'>{RichText.asText(data.title)}</h1>

          <div className='py-14'>
            <ImageCover image={data.featured_image} responsive />
          </div>
          <div className='py-14 text-lg'>
            <RichText render={data.content} />
          </div>
          <Gallery gallery={data.gallery} />
        </article>
        <RelatedPosts posts={props.taggedArticles} />
      </div>
    </div>
  );
}

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;

  const client = Client();

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

export const getStaticPaths = makeGetStaticPaths({
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
