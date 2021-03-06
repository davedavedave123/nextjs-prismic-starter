import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import ImageCover from './ImageCover';

export default function Contact() {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(200);

  useEffect(() => {
    if (imgRef?.current)
      setImgHeight(imgRef?.current?.getBoundingClientRect()?.width);
  }, [imgRef]);

  return (
    <div className='relative w-full lg:grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
      <div
        className='w-full h-full relative'
        ref={imgRef}
        style={{ height: imgHeight }}
      >
        <ImageCover src='/images/contact-us.png' width={1120} height={744} />
      </div>
      <div className='anim-up w-full h-full flex flex-col justify-center p-10'>
        <h2 className=''>Keep in touch</h2>
        <ContactForm />
      </div>
    </div>
  );
}
