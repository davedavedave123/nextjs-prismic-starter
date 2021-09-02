import React from 'react';
import GalleryImage from './GalleryImage';

export default function Gallery({ gallery }) {
  if (gallery[0].image?.url)
    return (
      <div className='w-full h-1/4 lg:grid grid-cols-2 grid-rows-2'>
        {gallery.map((galleryImage, index) => (
          // <div>gallery</div>

          <GalleryImage
            key={`galleryImage-${index}`}
            galleryImage={galleryImage}
          />
        ))}
      </div>
    );

  return null;
}
