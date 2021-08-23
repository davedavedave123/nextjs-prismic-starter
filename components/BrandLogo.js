import React from 'react';
import Image from 'next/image';

export default function BrandLogo() {
  return (
    <a href='/'>
      <div className='w-60 h-10 relative'>
        <Image src='/images/logo.png' layout='fill' objectFit='cover' />
      </div>
    </a>
  );
}
