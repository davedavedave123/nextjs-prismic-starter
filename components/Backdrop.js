import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { gsap } from 'gsap';

import Div100vh from 'react-div-100vh';

const Backdrop = forwardRef(
  (
    {
      visible,
      style,
      children,
      onBackdropClick,
      style_modalWrapper,
      fadeIn = false,
    },
    ref
  ) => {
    const backdropRef = useRef(null);
    const [mounted, setMounted] = useState(false);
    const backdropId = 'backdropId';

    const handleBackdropClick = event => {
      if (event.target.id === backdropId) onBackdropClick();
    };

    const open = () => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 0.8, duration: 0.2 }
      );
    };

    const close = () => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0.8 },
        {
          opacity: 0,
          duration: 0.2,
          onComplete: () => setMounted(false),
        }
      );
    };

    // useEffect(() => {
    //   if (visible) setMounted(true);
    //   if (!visible) close();
    // }, [visible]);

    // useEffect(() => {
    //   if (mounted) open();
    // }, [mounted]);

    useEffect(() => {
      window.addEventListener('click', handleBackdropClick);
      return () => window.removeEventListener('click', handleBackdropClick);
    }, []);

    // if (!mounted) return null;
    if (!visible) return null;

    return (
      <>
        <Div100vh style={{ ...styles.backdrop, ...style }} ref={backdropRef} />
        <Div100vh
          style={{ ...styles.modalWrapper, ...style_modalWrapper }}
          id={backdropId}
          // ref={ref}
        >
          {children}
        </Div100vh>
      </>
    );
  }
);

export default Backdrop;

const styles = {
  backdrop: {
    width: '100vw',
    height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    zIndex: 2600,
    opacity: 0.8,
    // backdropFilter: 'blur(10px)',
  },
  modalWrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'visible',
    // backgroundColor: 'pink',
    zIndex: 2700,
  },
};
