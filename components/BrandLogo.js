import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo() {
  return (
    <Link href='/'>
      <a>
        <div className='w-60 h-10 relative'>
          <Image src='/images/logo.png' layout='fill' objectFit='cover' />
        </div>
      </a>
    </Link>
  );
}
