import React, { useEffect, useRef } from 'react';
import _Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// utils
import animate from '../../utils/animate';

// context
import { useSetNavMenuIsOpen } from '../../context/navMenu';
import {
  useSetSubMenuIsOpen,
  useSetSubMenuItems,
} from '../../context/SubMenu_mobile';

export default function NavLink({
  item,
  underlineClassName,
  // openSubMenu,
  // closeSubMenu,
}) {
  const setMenuOpen = useSetNavMenuIsOpen();
  const setSubMenuIsOpen = useSetSubMenuIsOpen();
  const setSubMenuItems = useSetSubMenuItems();
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

  const LinkInner = () => (
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

  // If link is actually a button to open a sub menu
  if (item?.menuItems)
    return (
      <button
        style={{ ...styles.a, padding: '0px 2.5rem', cursor: 'pointer' }}
        onClick={() => {
          setSubMenuIsOpen(true);
          setSubMenuItems(item.menuItems);
        }}
      >
        <LinkInner />
        <div className='absolute right-5 top-0 h-full inline-block'>
          <div className='h-full flex items-center transform -rotate-90'>
            <Image src='/icons/chevron-down.svg' height={15} width={15} />
          </div>
        </div>
      </button>
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
