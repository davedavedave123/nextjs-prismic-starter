import Image from 'next/image';
import React from 'react';

const Spinner = () => {
  return <Image src='/icons/spinner3.gif' height='20' width='20' />;
  // return <Text>hi</Text>;
};

export default function Button({
  onClick,
  title,
  children,
  className,
  disabled,
  spinner = false,
  ...otherProps
}) {
  const disabledClassName = disabled && 'cursor-default opacity-50';
  const NOTdisabledClassName =
    !disabled && 'hover:bg-orange-light hover:text-black';
  return (
    <button
      className={`py-2 px-5 border-black bg-orange relative text-black ${disabledClassName} ${NOTdisabledClassName} ${className}`}
      onClick={() => {
        if (!disabled) onClick();
      }}
      disabled={disabled}
      {...otherProps}
    >
      {spinner ? <Spinner /> : title}
      {children}
    </button>
  );
}
