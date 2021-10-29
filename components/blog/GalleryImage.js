import React from 'react';
import { RichText } from 'prismic-reactjs';

import ImageCover from '../ImageCover';
import useBreakPoints from '../../hooks/useBreakPoints';

// expects
export default function GalleryImage({ galleryImage, onClick }) {
  const { caption, image } = galleryImage;
  const { isSmUp } = useBreakPoints();

  return (
    <button
      className={`w-full relative ${
        isSmUp ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={() => {
        if (isSmUp) {
          onClick();
        }
      }}
      style={{ height: '50vh' }}
    >
      <ImageCover
        image={image}
        // src={image.url}
        // alt={image.alt}
        // height={image.dimensions.height}
        // width={image.dimensions.width}
      />
      {caption.length > 0 && (
        <div
          className='absolute bottom-0 left-0 py-5 px-5 w-full z-10 text-white'
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <RichText render={caption} />
        </div>
      )}
    </button>
  );
}
