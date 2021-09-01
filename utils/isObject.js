const isObject = obj => {
  return (
    obj === Object(obj) &&
    Object.prototype.toString.call(obj) !== '[object Array]'
  );
};

export default isObject;
