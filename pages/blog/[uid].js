import React, { useEffect } from 'react';
import { useGetStaticPaths as makeGetStaticPaths } from 'next-slicezone/hooks';
import { RichText } from 'prismic-reactjs';
import Prismic from '@prismicio/client';
import SliceZone from 'next-slicezone';
import Image from 'next/image';

//components
import RelatedPosts from '../../components/blog/RelatedPosts';
import Gallery from '../../components/blog/Gallery';
import Layout from '../../components/Layout';
import MaxWidth from '../../components/MaxWidth';
import PhotoModal from '../../components/PhotoModal';

// adapters
import getPhotoModalImages_adapter from '../../adapters/getPhotoModalImages_adapter';

// other
import resolver from '../../sm-resolver';
import { Client } from '../../utils/prismicHelpers';

export default function BlogPage(props) {
  const { data } = props;

  // unless you use useGetStaticProps, you need to create a slices array at root level in props for SliceZone
  const sliceProps = { ...props };
  sliceProps.slices = props.data.body;

  return (
    <Layout>
      <PhotoModal images={getPhotoModalImages_adapter(data.gallery)} />
      <MaxWidth>
        <article className='pt-20 prismic-page'>
          <h1 className='py-10'>{RichText.asText(data.title)}</h1>

          <Image
            src={data.featured_image.url}
            width={data.featured_image.dimensions.width}
            height={data.featured_image.dimensions.height}
            layout='responsive'
          />

          <div className='py-14 text-lg'>
            <RichText render={data.content} />
          </div>

          <Gallery gallery={data.gallery} />

          <script
            async
            defer
            src='https://static.cdn.prismic.io/prismic.js?new=true&repo=tropics-nextjs-test'
          ></script>
        </article>
      </MaxWidth>
      <div className='mx-auto' style={{ maxWidth: 1300 }}>
        <RelatedPosts posts={props.taggedArticles} />
      </div>
    </Layout>
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
