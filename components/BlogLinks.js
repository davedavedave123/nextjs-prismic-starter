import React from 'react';
import ImageLink from './ImageLink';

export default function BlogLinks() {
  return (
    <div className='w-full relative lg:grid lg:grid-cols-2 xl:grid-cols-3'>
      <ImageLink
        to='/blog'
        title='Our Project'
        img={{
          src: '/images/digger.jpg',
          alt: 'digger',
          width: 1500,
          height: 1000,
        }}
      />
      <ImageLink
        to='/blog'
        title='Our Project'
        img={{
          src: '/images/digger.jpg',
          alt: 'digger',
          width: 1500,
          height: 1000,
        }}
      />
      <ImageLink
        to='/blog'
        title='Our Project'
        img={{
          src: '/images/digger.jpg',
          alt: 'digger',
          width: 1500,
          height: 1000,
        }}
      />
    </div>
  );
}
