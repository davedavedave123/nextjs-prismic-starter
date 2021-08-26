import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import animateOnScroll from '../utils/animateOnScroll';
import ImageCover from './ImageCover';

const IMG = {
  src: '/images/GOPR9291.jpg',
  dimensions: {
    width: 0,
    height: 0,
  },
};

export default function ImageWithText2({ title, body, img = IMG, children }) {
  const titleRef = useRef(null);

  // useEffect(() => {
  //   animateOnScroll();
  // }, []);

  return (
    <div className='w-full relative flex'>
      {/* Image wrapper */}
      <div
        className={`relative w-full h-96 overflow-hidden`}
        style={{ height: '40vw', minHeight: '50vh', maxHeight: '60vh' }}
      >
        <div className='relative w-full parallax' style={{ height: '150%' }}>
          {img.src && (
            <ImageCover
              src={img.src}
              blurSrc={img?.blurSrc}
              alt={img.alt}
              width={img.width}
              height={img.height}
              // layout='fill'
              // objectFit='cover'
            />
          )}
        </div>
      </div>
      {/* Text wrapper */}
      <div
        className='absolute top-0 left-0 p-5 w-full h-full flex justify-center items-center'
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div className='flex flex-col items-center text-center'>
          <h2 className='anim-up text-4xl text-white'>{title}</h2>
          {body && (
            <p data-animdelay={0.3} className='anim-up text-white pt-5'>
              {body}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
