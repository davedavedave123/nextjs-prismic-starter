import Image from 'next/image';
import React from 'react';
import useBreakPoints from '../hooks/useBreakPoints';

const IMG = {
  url: '/images/GOPR9291.jpg',
  dimensions: {
    width: 0,
    height: 0,
  },
};

export default function ImageWithText({ title, body, img = IMG, children }) {
  const { isLgDown } = useBreakPoints();

  return (
    <div className='w-full relative h-auto md:flex-row flex-col grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2'>
      {/* Image wrapper */}
      <div
        className={`relative w-full h-full overflow-hidden`}
        // style={{ maxHeight: '50vh' }}
      >
        {img.url && (
          <Image src={img.url} alt={img.alt} layout='fill' objectFit='cover' />
        )}
      </div>
      {/* Text wrapper */}
      <div
        // className='border-t-2 relative border-b-2 border-black p-10 flex justify-center items-center'
        className='relative p-5 md:p-10 md:flex justify-center items-center'
        style={{ minHeight: '50vw', maxHeight: '100vh' }}
      >
        <div>
          <h2 className='text-4xl'>{title}</h2>
          {body && <p>{body}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
