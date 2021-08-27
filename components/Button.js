import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useLottie } from 'lottie-react';

import spinner from '../public/icons/spinner.json';

const Lottie = () => {
  const options = {
    animationData: spinner,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

const Spinner = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='h-6 w-6 '>
        <Lottie />
      </div>
    </div>
  );
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
  const buttonRef = useRef(null);
  const disabledClassName = disabled && 'cursor-default opacity-50';
  const NOTdisabledClassName =
    !disabled && 'hover:bg-orange-light hover:text-black';
  const [buttonDimensions, setButtonDimensions] = useState({
    width: 0,
    height: 0,
  });

  const storeButtonDimensions = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setButtonDimensions({ width: rect.width, height: rect.height });
  };

  useEffect(() => {
    if (buttonRef?.current) setTimeout(storeButtonDimensions, 1000);
  }, [buttonRef?.current]);

  return (
    <button
      className={`py-2 px-5 border-black bg-orange relative text-black ${disabledClassName} ${NOTdisabledClassName} ${className}`}
      onClick={() => {
        if (!disabled) onClick();
      }}
      style={{
        width: buttonDimensions.width > 0 ? buttonDimensions.width : null,
      }}
      disabled={disabled}
      ref={buttonRef}
      {...otherProps}
    >
      {spinner ? <Spinner /> : title}

      {children}
    </button>
  );
}
