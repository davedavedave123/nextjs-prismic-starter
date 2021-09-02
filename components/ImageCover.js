import React from 'react';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

import getResponsiveImageObject_adapter from '../adapters/getResponsiveImageObject_adapter';

// A responsive version of layout='fill' objectFit='cover'
export default function ImageCover({
  image,
  clgImage,
  src,
  blurSrc,
  alt,
  width,
  height,
  className,
  style,
  ...props
}) {
  const {
    observe,
    unobserve,
    width: parentWidth,
    height: parentHeight,
    entry,
  } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  let imgSrc = src;
  let imgBlurSrc = blurSrc;
  let imgAlt = alt;
  let imgWidth = width;
  let imgHeight = height;

  // If there is a prismic image object then use the src responsively based on parent dimensions
  if (image) {
    const { src, blurSrc, alt, width, height } =
      getResponsiveImageObject_adapter(
        image,
        {
          width: parentWidth,
          height: parentHeight,
        },
        clgImage
      );

    imgSrc = src;
    imgBlurSrc = blurSrc;
    imgAlt = alt;
    imgWidth = width;
    imgHeight = height;
  }

  const ratio = imgHeight / imgWidth;
  imgHeight = parentWidth * ratio;

  // Makes sure that the img is never smaller than the screen size
  const imgHeight_adjusted =
    imgHeight < parentHeight ? parentHeight : imgHeight;
  const imgWidth_adjusted =
    imgHeight < parentHeight ? parentHeight / ratio : parentWidth;

  // Centers the image within the parent div
  const marginLeft_adjusted = -(imgWidth_adjusted - parentWidth) / 2;
  const marginTop_adjusted = -(imgHeight_adjusted - parentHeight) / 2;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      className={className}
      ref={observe}
    >
      <div
        className='relative'
        style={{
          position: 'relative',
          width: imgWidth_adjusted,
          height: imgHeight_adjusted,
          marginLeft: marginLeft_adjusted,
          marginTop: marginTop_adjusted,
        }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth_adjusted}
          height={imgHeight_adjusted}
          layout='responsive'
          placeholder={imgBlurSrc ? 'blur' : 'empty'}
          blurDataURL={imgBlurSrc}
          {...props}
        />
      </div>
    </div>
  );
}
