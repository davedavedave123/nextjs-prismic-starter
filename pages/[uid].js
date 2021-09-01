import React, { useEffect } from 'react';
import { Client } from '../utils/prismicHelpers';
import {
  useGetStaticProps as makeGetStaticProps,
  useGetStaticPaths as makeGetStaticPaths,
} from 'next-slicezone/hooks';
import { RichText } from 'prismic-reactjs';

export default function Page(props) {
  const { data } = props;

  return (
    <div
      className=''
      style={{
        width: '100vw',
        backgroundColor: 'white',
        padding: '20px 100px',
      }}
    >
      <RichText render={data?.page_title} />
      <RichText render={data?.text} />
      <>
        {/* <SliceZone {...props} resolver={resolver} /> */}
        <script
          async
          defer
          src='https://static.cdn.prismic.io/prismic.js?new=true&repo=tropics-nextjs-test'
        ></script>
      </>
    </div>
  );
}

export const getStaticProps = makeGetStaticProps({
  client: Client(),
  queryType: 'repeat',
  type: 'page',
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = makeGetStaticPaths({
  client: Client(),
  type: 'page',
  formatPath: prismicDocument => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});
