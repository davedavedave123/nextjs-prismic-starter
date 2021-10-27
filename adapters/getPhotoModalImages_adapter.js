// For prismic
const getPhotoModalImages_adapter = allImages => {
  return allImages.map(node => ({
    caption: node.caption,
    width: node.image.dimensions.width,
    height: node.image.dimensions.height,
    src: node.image.url,
    alt: node.image.alt,
  }));
};

export default getPhotoModalImages_adapter;
