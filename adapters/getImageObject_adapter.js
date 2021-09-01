import React from 'react';

const getObject = image => {
  return {
    src: image.url,
    alt: image.alt,
    width: image.dimensions.width,
    height: image.dimensions.height,
  };
};

const getBlur = image => {
  return {
    blurSrc: image?.blur ? image.blur.url : null,
  };
};

const getImageObject_adapter = (image, breakPoints) => {
  const { isMdUp, isLgUp, isXlUp, isXxlUp } = breakPoints;

  if (isLgUp) {
    return {
      ...getObject(image),
      ...getBlur(image),
    };
  }

  if (isMdUp) {
    return {
      ...getObject(image?.tablet ? image.tablet : image),
      ...getBlur(image),
    };
  }

  return {
    ...getObject(image?.mobile ? image.mobile : image),
    ...getBlur(image),
  };

  // if(isLgUp)
};

export default getImageObject_adapter;
