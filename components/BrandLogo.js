import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ImageCover from './ImageCover';

export default function BrandLogo() {
  return (
    <Link href='/'>
      <a>
        <div className='w-32 sm:w-60 h-10 relative flex items-center'>
          <Image src='/images/logo.png' width={1092} height={276} />
        </div>
      </a>
    </Link>
  );
}
