import React from 'react';
import Image from 'next/image';

export default function Icon({
  className,
  src,
  alt,
  style,
  imgClassName,
  imgStyle,
}) {
  return (
    <div className={`relative ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        className={imgClassName}
        style={imgStyle}
      />
    </div>
  );
}
