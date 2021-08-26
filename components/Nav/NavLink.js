import React, { useEffect, useRef } from 'react';
import _Link from 'next/link';
import { useRouter } from 'next/router';

// utils
import animate from '../../utils/animate';

// context
import { useNavMenu, useSetNavMenu } from '../../context/navMenu';

export default function NavLink({ item, underlineClassName }) {
  const setMenuOpen = useSetNavMenu();
  const router = useRouter();
  const barRef = useRef(null);

  const onThisPage = router.asPath === item?.to;
  const barWidth = onThisPage ? 'w-full' : 'w-0';

  const onHover = () => {
    if (!onThisPage) animate(barRef, { width: '100%' });
  };

  const onUnhover = () => {
    if (!onThisPage) animate(barRef, { width: 0 });
  };

  const LinkInner = ({ className }) => (
    <>
      <span>{item.title}</span>
      <div className='absolute -bottom-3 px-8 w-full left-0 h-1'>
        <div
          className={`${barWidth} h-full bg-black ${underlineClassName}`}
          ref={barRef}
        />
      </div>
    </>
  );

  if (item?.menuItems)
    return (
      <div style={{ ...styles.a, padding: '0px 2.5rem', cursor: 'pointer' }}>
        <LinkInner />
      </div>
    );

  return (
    <_Link href={item.to}>
      <a
        style={styles.a}
        onClick={() => setMenuOpen(false)}
        onMouseEnter={onHover}
        onMouseLeave={onUnhover}
      >
        <LinkInner />
      </a>
    </_Link>
  );
}

const styles = {
  a: {
    // backgroundColor: 'red',
    padding: '5px 2.5rem',
    color: 'black',
    fontSize: '1.3rem',
    position: 'relative',
  },
};
