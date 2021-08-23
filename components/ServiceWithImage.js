import React from 'react';
// import Image from './Image';
import Image from 'next/image';

const IMG = {
  url: '',
  dimensions: {
    width: 0,
    height: 0,
  },
};

export default function ServiceWithImage({
  img = IMG,
  title,
  body,
  titleClassName,
  bodyClassName,
  imgClassName,
  imgWrapperClassName,
  wrapperClassName,
}) {
  return (
    <div
      className={`flex flex-col items-center w-full py-10 ${wrapperClassName}`}
    >
      <div
        className={`w-40 h-40 p-4 sm:w-60 sm:h-60 sm:p-6 overflow-hidden rounded-full flex justify-center items-center relative ${imgWrapperClassName}`}
        // className="relative rounded-full"
        // style={{
        //   height: "12rem",
        //   width: "12rem",
        //   backgroundColor: "yellow",
        //   borderRadius: "50%",
        // }}
      >
        <div
          className={`relative w-full h-full rounded-full z-0 overflow-hidden ${imgClassName}`}
        >
          {img.url && (
            <Image
              src={img.url}
              alt={img.alt}
              // width={img?.dimensions?.width}
              // height={img?.dimensions?.height}
              layout='fill'
              objectFit='cover'
              // width={2250}
              // height={1390}
              // layout="responsive"
            />
          )}
        </div>
      </div>
      <h3 className={`text-center text-3xl pb-3 ${titleClassName}`}>{title}</h3>
      <div className={`text-center ${bodyClassName}`}>{body}</div>
    </div>
  );
}
