import React from 'react';
import GalleryImage from './GalleryImage';

// context
import {
  useSetPhotoModalIsOpen,
  useSetPhotoIndex,
} from '../../context/photoModal';

export default function Gallery({ gallery }) {
  const setModalOpen = useSetPhotoModalIsOpen();
  const setPhotoIndex = useSetPhotoIndex();

  const handleImageClick = index => {
    setModalOpen(true);
    setPhotoIndex(index);
  };

  if (gallery[0].image?.url)
    return (
      <div
        className='w-full h-1/4 lg:grid grid-cols-2 grid-rows-2'
        // style={{ maxWidth: 1500, margin: '0 auto' }}
      >
        {/* <div className='flex-1 bg-yellow-300 p-10 box-content'></div>
        <div className='flex-1 bg-blue-300 p-10 box-content'></div> */}
        {gallery.map((galleryImage, index) => (
          <GalleryImage
            key={`galleryImage-${index}`}
            galleryImage={galleryImage}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    );

  return null;
}
