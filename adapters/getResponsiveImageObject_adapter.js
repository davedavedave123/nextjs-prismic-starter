import isObject from '../utils/isObject';

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

// Choose the one that is the next greater than the parent width

// returns [{key: 'objectKey', width: 500}, ...]
const getResponsiveImageWidths = image => {
  const entries = Object.entries(image);

  // Cycle through each property, return it if it is an object and has a dimensions property
  // Extract the width and the property key
  const widths = entries
    .filter(([key, obj]) => isObject(obj) && obj?.dimensions)
    .map(([key, image]) => ({ key, width: image.dimensions.width }));

  // Sort widths lowest to highest
  return widths.sort((a, b) => a.width - b.width);
};

// Find the next largest image from the parent
const getImageKey = (widths, parent) =>
  widths.find(item => item.width > parent.width);

const getResponsiveImageObject_adapter = (image, parent, clgImage) => {
  const widths = getResponsiveImageWidths(image);
  const key = getImageKey(widths, parent)?.key;

  if (clgImage) {
    console.log('--- Responsive Image ---');
    console.log('widths:', widths);
    console.log('parent:', parent);
    console.log('key:', key);
    console.log('image:', getObject(key ? image[key] : image));
  }

  return {
    ...getObject(key && parent.width > 0 ? image[key] : image),
    ...getBlur(image),
  };
};

export default getResponsiveImageObject_adapter;
