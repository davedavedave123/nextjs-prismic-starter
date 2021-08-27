import Link from 'next/link';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

import ImageCover from './ImageCover';

const DEFAULTS = { ease: 'power3.easeInOut', duration: 1.2 };

// img = {src: '/images/somefile.jpg', alt: 'description', width: 100, height: 100}
export default function ImageLink({ to, title, img }) {
  const imgWrapperRef = useRef(null);
  const titleRef = useRef(null);

  const onHover = () => {
    gsap.to(imgWrapperRef.current, { scale: 1.2, ...DEFAULTS });
    gsap.to(titleRef.current, { translateY: '-50%', ...DEFAULTS });
  };

  const onUnhover = () => {
    gsap.to(imgWrapperRef.current, { scale: 1, ...DEFAULTS });
    gsap.to(titleRef.current, { translateY: 0, ...DEFAULTS });
  };

  return (
    <div
      className='h-60 w-full md:w-96 mx-auto my-20'
      // className='h-60 w-96'
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
    >
      <Link href={to}>
        <a className=' flex flex-col items-center'>
          <div className='w-full h-4/5 overflow-hidden'>
            <div className='w-full h-full' ref={imgWrapperRef}>
              <ImageCover
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                quality={20}
              />
            </div>
          </div>
          <h4
            ref={titleRef}
            className='w-4/5 h-10 transform text-center bg-white -translate-y-1/2'
          >
            {title}
          </h4>
        </a>
      </Link>
    </div>
  );
}
