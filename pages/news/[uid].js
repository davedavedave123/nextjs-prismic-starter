import { Client } from '../../utils/prismicHelpers';
import SliceZone from 'next-slicezone';
import {
  useGetStaticProps as makeGetStaticProps,
  useGetStaticPaths as makeGetStaticPaths,
} from 'next-slicezone/hooks';
import Prismic from '@prismicio/client';

import resolver from '../../sm-resolver.js';
import { useEffect } from 'react';

const NewsPage = props => {
  useEffect(() => {
    console.log('NewsPage props:', props);
  }, []);

  return (
    <>
      <SliceZone {...props} resolver={resolver} />
      <script
        async
        defer
        src='https://static.cdn.prismic.io/prismic.js?new=true&repo=tropics-nextjs-test'
      ></script>
    </>
  );
};

// Fetch content from prismic
export const getStaticProps = makeGetStaticProps({
  client: Client(),
  queryType: 'repeat',
  type: 'news',
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

// export async function getStaticProps({
//   params,
//   preview = null,
//   previewData = {},
// }) {
//   const { ref } = previewData;

//   const client = Client();

//   // const doc = await client.getByUID('news', params.uid);

//   const doc = await client.query(
//     Prismic.Predicates.at('my.news.uid', params.uid)
//   );

//   // use Prismic.Predicates.at to target posts that specifically contain those tags
//   // const taggedArticles =
//   //   doc.tags.length > 0
//   //     ? await client.query(Prismic.Predicates.any('document.tags', doc.tags), {
//   //         pageSize: 8,
//   //       })
//   //     : [];

//   return {
//     props: {
//       ...doc,
//       // taggedArticles: taggedArticles?.results ? taggedArticles.results : [],
//       preview,
//     },
//   };
// }

export const getStaticPaths = makeGetStaticPaths({
  client: Client(),
  type: 'news',
  formatPath: prismicDocument => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default NewsPage;
