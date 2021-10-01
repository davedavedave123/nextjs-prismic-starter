import React from 'react';

export default function MaxWidth({
  children,
  className,
  style,
  ...otherProps
}) {
  return (
    <div
      className={`mx-auto ${className}`}
      style={{ maxWidth: 1300, ...style }}
      {...otherProps}
    >
      {children}
    </div>
  );
}
