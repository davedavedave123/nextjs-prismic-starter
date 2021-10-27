import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Slider from 'react-slick';
import { RichText } from 'prismic-reactjs';

// hooks
import useWindowResize from '../hooks/useWindowResize';

// components
import Backdrop from './Backdrop';

// context
import {
  usePhotoIndex,
  usePhotoModalIsOpen,
  useSetPhotoModalIsOpen,
} from '../context/photoModal';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChevronArrow = ({ fill, style }) => {
  return (
    <svg style={{ width: 60, height: 60, ...style }} viewBox='0 0 24 24'>
      <path
        fill={fill}
        d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'
      />
    </svg>
  );
};

const Photo = ({ image }) => {
  return (
    <div
      className='relative box-border flex-shrink'
      style={{
        width: image.width,
        height: image.height,
      }}
    >
      <Image
        alt={image.alt}
        src={image.src}
        layout='fill'
        objectFit='cover'
        loading='eager'
      />
    </div>
  );
};

const ImageBox = ({ image }) => {
  if (!image) return null;

  return (
    <div
      className='bg-white relative flex flex-col justify-center items-center'
      style={{
        height: image.height,
        width: image.width,
      }}
    >
      <Photo image={image} />
      {image.caption.length > 0 && (
        <div
          className='absolute bottom-0 left-0 py-5 px-5 w-full z-10 text-white'
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <RichText render={image.caption} />
        </div>
      )}
    </div>
  );
};

const getRatio = (width, height) => {
  return height / width;
};

const resizeImages = (images, winWidth, winHeight) => {
  return images.map(image => {
    const ratio = getRatio(image.width, image.height);
    let imageHeight = winHeight - 200;
    let imageWidth = imageHeight / ratio;

    if (imageWidth > winWidth - 200) {
      imageWidth = winWidth - 200;
      imageHeight = imageWidth * ratio;
    }

    return { ...image, width: imageWidth, height: imageHeight };
  });
};

// images is [{src, alt, width, height}]
export default function PhotoModal({ images }) {
  const visible = usePhotoModalIsOpen();
  const setModalOpen = useSetPhotoModalIsOpen();
  const photoIndex = usePhotoIndex();

  const backdropRef = useRef(null);
  const [winWidth, winHeight] = useWindowResize();
  const sliderRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(photoIndex);

  const resizedImages = resizeImages(images, winWidth, winHeight);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const open = () => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power3.easeInOut',
      }
    );
  };

  const close = () => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'power3.easeInOut',
        onComplete: () => setShowModal(false),
      }
    );
  };

  useEffect(() => {
    if (visible) setShowModal(true);
    if (!visible) close();
  }, [showModal, visible]);

  useEffect(() => {
    if (showModal) open();
  }, [showModal]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoPlay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: photoIndex,
    arrows: false,
    afterChange: newIndex => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Backdrop
      visible={showModal}
      onBackdropClick={() => setModalOpen(false)}
      style={{
        backgroundColor: 'black',
        opacity: 0.8,
      }}
      modalWidth={resizedImages[currentSlide].width}
      modalHeight={resizedImages[currentSlide].height}
    >
      <div
        className='relative bg-white overflow-visible'
        // className='absolute left-0 top-0 overflow-visible w-full h-full bg-red-200'
        style={{
          height: resizedImages[currentSlide].height,
          width: resizedImages[currentSlide].width,
        }}
        ref={backdropRef}
      >
        <Slider
          {...sliderSettings}
          ref={sliderRef}
          style={{ overflow: 'visible' }}
        >
          {resizedImages.map((image, index) => (
            <div key={`imageboxmodal-${index}`}>
              <ImageBox image={image} />
            </div>
          ))}
        </Slider>

        {/* prev */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            marginTop: -30,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '0 10px 10px 0',
          }}
        >
          <button onClick={prev} style={{ marginTop: 5 }}>
            <ChevronArrow
              fill='black'
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
        </div>

        {/* next */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            marginTop: -30,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '10px 0 0 10px',
          }}
        >
          <button onClick={next} style={{ marginTop: 5 }}>
            <ChevronArrow fill='black' />
          </button>
        </div>
      </div>
    </Backdrop>
  );
}

const styles = {
  photoNavButton: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 60,
    zIndex: 2500,
  },
  next: {
    right: 0,
  },
  previous: {
    left: 0,
  },
  modalContent: {
    padding: 0,
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    zIndex: 3000,
    position: 'relative',
    marginLeft: '0 !important',
    marginRight: '0 !important',
    left: 0,
    inset: 0,
    margin: 0,
  },
  modalOverlay: {
    zIndex: 3000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    width: '100%',
  },
  modalContent_lgDown: {
    zIndex: 3000,
  },
};
