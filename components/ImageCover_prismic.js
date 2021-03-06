import React from 'react';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

import ImageCover from './ImageCover';
import getResponsiveImageObject_adapter from '../adapters/getResponsiveImageObject_adapter';

// A responsive version of layout='fill' objectFit='cover'
export default function ImageCover_prisimic({
  image,
  className,
  style,
  responsive,
  clgImage,
  ...props
}) {
  // const breakPoints = useBreakPoints();
  // const { src, blurSrc, alt, width, height } = getImageObject_adapter(
  //   image,
  //   breakPoints
  // );

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

  // monitor dimensions of parent and return the image that matches those dimensions best
  const { src, blurSrc, alt, width, height } = getResponsiveImageObject_adapter(
    image,
    {
      width: parentWidth,
      height: parentHeight,
    },
    clgImage
  );

  // in this case 'responsive' refers to the layout='responsive' in the next/image Image component
  if (responsive)
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
        layout='responsive'
        placeholder={blurSrc ? 'blur' : 'empty'}
        blurDataURL={blurSrc}
      />
    );

  return (
    <div className='w-full h-full relative' ref={observe}>
      <ImageCover
        src={src}
        blurSrc={blurSrc}
        alt={alt}
        width={width}
        height={height}
        {...props}
        className={className}
        style={style}
      />
    </div>
  );
}
