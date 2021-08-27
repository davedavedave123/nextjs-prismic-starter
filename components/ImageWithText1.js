import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import ImageCover from './ImageCover';

const IMG = {
  src: '',
  dimensions: {
    width: 0,
    height: 0,
  },
};

export default function ImageWithText({ title, body, img = IMG, children }) {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(400);

  useEffect(() => {
    if (textRef?.current)
      setImgHeight(textRef?.current?.getBoundingClientRect()?.height);
  }, [textRef?.current]);

  return (
    <div
      // className='w-full relative h-auto md:grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2'
      className='w-full relative h-auto md:flex'
    >
      {/* Image wrapper */}
      <div
        className={`relative md:w-1/2 w-full h-full`}
        ref={imgRef}
        style={{ height: imgHeight }}
      >
        {img.src && (
          <ImageCover
            src={img.src}
            alt={img.alt}
            blurSrc={img?.blurSrc}
            height={img.height}
            width={img.width}
            quality={20}
          />
        )}
      </div>
      {/* Text wrapper */}
      <div
        className='relative md:w-1/2 w-full p-5 bg-yellow-300 md:p-10 md:flex justify-center items-center'
        style={{ minHeight: '50vw', maxHeight: '100vh' }}
        ref={textRef}
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
