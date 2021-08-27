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
  const [showSpinner, setShowSpinner] = useState(false);
  const [buttonDimensions, setButtonDimensions] = useState({
    width: 0,
    height: 0,
  });

  // const storeButtonDimensions = () => {
  //   const rect = buttonRef.current.getBoundingClientRect();
  //   setButtonDimensions({ width: rect.width, height: rect.height });
  // };

  // Store the button dimensinos before showing the spinner
  // This way the button size doesn't change when spinner is showing
  useEffect(() => {
    if (spinner) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonDimensions({ width: rect.width, height: rect.height });
      setShowSpinner(true);
    }
    if (!spinner) setShowSpinner(false);
  }, [spinner]);

  // useEffect(() => {
  //   if (buttonRef?.current) setTimeout(storeButtonDimensions, 1000);
  // }, []);

  return (
    <button
      className={`py-2 px-5 border-black bg-orange relative text-black ${disabledClassName} ${NOTdisabledClassName} ${className}`}
      onClick={() => {
        if (!disabled) onClick();
      }}
      style={{
        width: buttonDimensions.width > 0 ? buttonDimensions.width : null,
        height: buttonDimensions.height > 0 ? buttonDimensions.height : null,
      }}
      disabled={disabled}
      ref={buttonRef}
      {...otherProps}
    >
      {/* Try watching for 'spinner' change */}
      {/* Then on spinner change, set the button dimensions, then use showSpinner=true or something */}
      {showSpinner ? <Spinner /> : title}

      {children}
    </button>
  );
}
