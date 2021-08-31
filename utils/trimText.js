const trimText = (text, length) => {
  // const trimmed = text.slice(0, length)
  return text.slice(0, length) + '...';
};

export default trimText;
