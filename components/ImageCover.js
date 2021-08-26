import React from 'react';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

// A responsive version of layout='fill' objectFit='cover'
export default function ImageCover({
  src,
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

  const ratio = height / width;
  const imgHeight = parentWidth * ratio;

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
          src={src}
          alt={alt}
          width={imgWidth_adjusted}
          height={imgHeight_adjusted}
          layout='responsive'
          {...props}
        />
      </div>
    </div>
  );
}
