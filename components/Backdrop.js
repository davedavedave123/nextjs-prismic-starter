import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { gsap } from 'gsap';
import Modal from 'react-modal';

// import Div100vh from 'react-div-100vh';
// import useWindowSize from '../hooks/useWindowResize';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
    height: '100vh',
    width: '100vw',
  },
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // width: 'auto',
    // height: 'auto',
    position: 'relative',
  },
};

const Backdrop = forwardRef(
  (
    {
      visible,
      style,
      children,
      onBackdropClick,
      style_modalWrapper,
      fadeIn = false,
      modalWidth,
      modalHeight,
      modalWrapperClass,
      modalWrapperStyle,
    },
    ref
  ) => {
    const backdropRef = useRef(null);
    const [mounted, setMounted] = useState(false);
    const backdropId = 'backdropId';

    Modal.setAppElement('#__next');

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
        <Modal
          isOpen={visible}
          onRequestClose={onBackdropClick}
          // style={{ ...customStyles, width: modalWidth, height: modalHeight }}
          style={customStyles}
        >
          {/* <div
            style={{ ...styles.backdrop, ...style }}
            className='w-screen h-screen'
            ref={backdropRef}
          /> */}
          {/* <div
            style={{ ...styles.modalWrapper, ...style_modalWrapper }}
            className='w-screen h-screen'
            id={backdropId}
            // ref={ref}
          > */}
          {/* {children} */}
          {/* </div> */}
          <div
            id={backdropId}
            className={`fixed top-0 left-0 w-screen h-screen ${modalWrapperClass}`}
            style={modalWrapperStyle}
          >
            {/* <div
              style={{
                // width: modalWidth,
                // height: modalHeight,
                ...modalWrapperStyle,
              }}
              className='w-full h-full'
            > */}
            {children}
            {/* </div> */}
          </div>
        </Modal>
      </>
    );
  }
);

Backdrop.displayName = 'Backdrop';

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
