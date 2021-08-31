import React, { useEffect } from 'react';
import { useGetStaticProps } from 'next-slicezone/hooks';
import Prismic from '@prismicio/client';
import { Client } from '../../utils/prismicHelpers';

// components
import BlogLink from '../../components/blog/BlogLink';

export default function BlogIndex(props) {
  useEffect(() => {
    console.log('blogs:', props.blogs);
  }, []);

  return (
    <div className='w-full relative'>
      <div className='max-w-7xl relative pt-20 mx-auto'>
        {props.blogs.map((blog, index) => (
          <BlogLink key={`blog-link-${index}`} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const data =
    (await Client().query(Prismic.Predicates.at('document.type', 'blog'), {
      lang: '*',
    })) || {};

  // const data = {};

  return {
    props: {
      blogs: data?.results || [],
    },
  };
};

// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   queryType: 'repeat',
//   type: 'blog',
//   apiParams({ params }) {
//     // params are passed by getStaticPaths
//     return {
//       uid: params.uid,
//     };
//   },
//   // apiParams({ params }) {
//   //   return {
//   //     uid: params.uid,
//   //   };
//   // },
// });
