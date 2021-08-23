import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const IMG = {
  url: '/images/GOPR9291.jpg',
  dimensions: {
    width: 0,
    height: 0,
  },
};

export default function ImageWithText({ title, body, img = IMG, children }) {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(200);

  useEffect(() => {
    if (imgRef?.current)
      setImgHeight(imgRef?.current?.getBoundingClientRect()?.width);
  }, [imgRef]);

  return (
    <div className='w-full relative h-auto md:grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2'>
      {/* Image wrapper */}
      <div
        className={`relative w-full h-full overflow-hidden`}
        ref={imgRef}
        style={{ height: imgHeight }}
      >
        {img.url && (
          <Image src={img.url} alt={img.alt} layout='fill' objectFit='cover' />
        )}
      </div>
      {/* Text wrapper */}
      <div
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
