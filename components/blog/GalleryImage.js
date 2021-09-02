import React from 'react';
import { RichText } from 'prismic-reactjs';

import ImageCover from '../ImageCover';

// expects
export default function GalleryImage({ galleryImage }) {
  const { caption, image } = galleryImage;

  return (
    <div className='w-full h-full relative'>
      <ImageCover
        image={image}
        // src={image.url}
        // alt={image.alt}
        // height={image.dimensions.height}
        // width={image.dimensions.width}
      />
      {caption && (
        <div
          className='absolute bottom-0 left-0 py-5 px-5 w-full z-10 text-white'
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <RichText render={caption} />
        </div>
      )}
    </div>
  );
}
