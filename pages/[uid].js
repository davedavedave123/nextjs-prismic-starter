import React, { useEffect } from 'react';
import { Client } from '../utils/prismicHelpers';
// ESLint stops you from using useGetStaticProps in deployment because it assumes it is a hook. Name change fixes it.
import {
  useGetStaticProps as makeGetStaticProps,
  useGetStaticPaths as makeGetStaticPaths,
} from 'next-slicezone/hooks';
import { RichText } from 'prismic-reactjs';

// components
import Layout from '../components/Layout';
import { NavbarPadder } from '../components/nav/Navbar';
import MaxWidth from '../components/MaxWidth';

export default function Page(props) {
  const { data } = props;

  return (
    <Layout className='prismic-page'>
      <MaxWidth className='prismic-page'>
        <NavbarPadder />
        {/* <div style={{ maxWidth: 800, margin: '0 auto' }}> */}
        <RichText render={data?.page_title} />
        {/* </div> */}
        <RichText render={data?.text} />
        <>
          {/* <SliceZone {...props} resolver={resolver} /> */}
          <script
            async
            defer
            src='https://static.cdn.prismic.io/prismic.js?new=true&repo=tropics-nextjs-test'
          ></script>
        </>
      </MaxWidth>
    </Layout>
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
