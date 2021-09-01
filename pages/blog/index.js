import React, { useEffect } from 'react';
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
