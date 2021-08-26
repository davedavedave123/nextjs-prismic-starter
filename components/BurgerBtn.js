import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';

// npm i gsap

const TopBar = forwardRef(({ thickness }, ref) => {
  thickness = thickness || 1;

  return (
    <div
      style={{
        ...styles.bar,
        // position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        borderWidth: thickness,
      }}
      ref={ref}
    />
  );
});
TopBar.displayName = 'TopBar';

const MidBar = forwardRef(({ thickness, alignLeft }, ref) => {
  thickness = thickness || 1;
  return (
    <div
      style={{
        ...styles.bar,
        top: '66%',
        right: alignLeft ? null : 0,
        left: alignLeft ? 0 : null,
        width: '100%',
        borderWidth: thickness,
      }}
      ref={ref}
    />
  );
});
MidBar.displayName = 'MidBar';

const BottomBar = forwardRef(({ thickness, alignLeft, botBarWidth }, ref) => {
  thickness = thickness || 1;
  return (
    <div
      style={{
        ...styles.bar,
        bottom: 0,
        right: alignLeft ? null : 0,
        left: alignLeft ? 0 : null,
        width: botBarWidth,
        borderWidth: thickness,
      }}
      ref={ref}
    />
  );
});
BottomBar.displayName = 'BottomBar';

export default function BurgerBtn({
  onClick,
  rightOffset,
  thickness = 2,
  style,
  barStyle,
  menuOpen,
  height = 20,
  width = 40,
  alignLeft,
  bottomBarWidth,
  className,
}) {
  const duration = 0.2;
  const ease = 'power3.easeInOut';
  const topBarTop = 8;
  const topBarRight = -1;
  const botBarTop = 8;
  const botBarRight = -5 + rightOffset;

  const [hasOpened, setHasOpened] = useState(false);

  // const botBarWidth = alignLeft ? '60%' : '40%';
  const botBarWidth = bottomBarWidth || '50%';

  let topBarRef = useRef(null);
  let midBar = null;
  let bottomBarRef = useRef(null);

  useEffect(() => {
    if (menuOpen && !hasOpened) setHasOpened(!hasOpened);
  }, [menuOpen]);

  const open = () => {
    // Open top bar
    gsap.fromTo(
      topBarRef.current,
      {
        top: 0,
        right: 0,
        rotate: 0,
      },
      {
        top: topBarTop,
        right: topBarRight,
        rotate: 45,
        duration,
        ease,
      }
    );
    // Open bottom bar
    gsap.fromTo(
      bottomBarRef.current,
      {
        top: '100%',
        right: 0,
        rotate: 0,
        width: botBarWidth,
      },
      {
        top: botBarTop,
        right: botBarRight,
        rotate: -45,
        width: '100%',
        duration,
        ease,
      }
    );
  };

  const close = () => {
    // Close top bar
    gsap.fromTo(
      topBarRef.current,
      {
        top: topBarTop,
        right: topBarRight,
        rotate: 45,
      },
      {
        top: 0,
        right: 0,
        rotate: 0,
        duration,
        ease,
      }
    );
    // Close bottom bar
    gsap.fromTo(
      bottomBarRef.current,
      {
        top: botBarTop,
        right: botBarRight,
        rotate: -45,
        width: '100%',
      },
      {
        top: '100%',
        right: 0,
        rotate: 0,
        width: botBarWidth,
        duration,
        ease,
      }
    );
  };

  // checking if hasOpened stops the close animation from firing on first render
  useEffect(() => {
    if (menuOpen) {
      open();
    }
    if (!menuOpen && hasOpened) {
      close();
    }
  }, [menuOpen]);

  return (
    <button
      style={{
        ...styles.button,
        ...style,
      }}
      onClick={onClick}
      className={className}
    >
      <div
        style={{
          height,
          width,
          position: 'relative',
        }}
      >
        {/* hi wtf */}
        <TopBar
          width='100%'
          ref={topBarRef}
          thickness={thickness}
          alignLeft={alignLeft}
        />
        <BottomBar
          width='50%'
          ref={bottomBarRef}
          thickness={thickness}
          alignLeft={alignLeft}
          botBarWidth={botBarWidth}
        />
      </div>
    </button>
  );
}

const styles = {
  button: {
    // display: 'inline-block',
    border: 'none',
    margin: 0,
    textDecoration: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'sans-serif',
    fontSize: '1rem',
    cursor: 'pointer',
    // textAlign: 'center',
    // transition: 'transform 0.3s ease-in-out',
    '-webkitAppearance': 'none',
    '-moz-appearance': 'none',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    outline: 0,
    position: 'relative',
    zIndex: 40,
    padding: 20,
    boxSizing: 'border-box',
  },
  bar: {
    position: 'absolute',
    // top: 0,
    right: 0,
    // borderTop: 'solid 1px black',
    border: 'none',
    backgroundColor: 'black',
    height: 3,
    padding: 0,
    boxSizing: 'border-box',
    outline: 0,
  },
};
