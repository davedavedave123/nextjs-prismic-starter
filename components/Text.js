import React, { forwardRef } from 'react';

import ResponsiveTag from './ResponsiveElement';

const Text = forwardRef(
  (
    { children, bold, p, span, style, className, customTag, ...otherProps },
    ref
  ) => {
    const tag = span ? 'span' : p ? 'p' : customTag ? customTag : 'div';

    return (
      <ResponsiveTag
        ref={ref}
        style={{
          fontFamily: 'Superclarendon',
          fontWeight: bold ? 700 : 300,
          ...style,
        }}
        type={tag}
        {...otherProps}
        className={className}
      >
        {children}
      </ResponsiveTag>
    );
  }
);

export default Text;
