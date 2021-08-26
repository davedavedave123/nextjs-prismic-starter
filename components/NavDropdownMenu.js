import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';

import { getCurrentRefs } from '../utils/animate';
import Link from 'next/link';
import Image from 'next/image';

const DEFAULTS = { duration: 0.5, ease: 'power4.easeInOut' };

export default function NavHoverMenu({
  menuItems,
  HoverButton,
  menuItemClassName,
  menuItemStyle,
}) {
  const openButtonRef = useRef(null);
  const menuWrapperRef = useRef(null);

  const [menuItemRefs, setMenuItemRefs] = useState([]);

  useEffect(() => {
    const newArr = Array(menuItems.length)
      .fill()
      .map((_, i) => menuItemRefs[i] || createRef());
    setMenuItemRefs(newArr);
  }, [menuItems.length]);

  const handleHover = () => {
    gsap.to(menuWrapperRef.current, {
      height: 'auto',
      ...DEFAULTS,
    });

    const currentMenuItems = getCurrentRefs(menuItemRefs);
    gsap.to(
      currentMenuItems,
      // { y: -50, opacity: 0, stagger: 0.1, ...DEFAULTS }
      { y: 0, opacity: 1, stagger: 0.1, ...DEFAULTS }
    );
  };

  const handleUnhover = () => {
    gsap.to(menuWrapperRef.current, {
      height: 0,
      ...DEFAULTS,
    });

    const currentMenuItems = getCurrentRefs(menuItemRefs);
    gsap.to(
      [...currentMenuItems].reverse(),
      // { y: 0, opacity: 1 },
      { y: -50, opacity: 0, stagger: 0.05, ...DEFAULTS }
    );
  };

  return (
    <div
      className='relative'
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div ref={openButtonRef} className='relative'>
        <HoverButton />
        <div className='absolute right-5 top-0 h-full inline-block'>
          <div className='h-full flex items-center'>
            <Image src='/icons/chevron-down.svg' height={15} width={15} />
          </div>
        </div>
      </div>
      <div
        className='w-72 h-0 overflow-hidden absolute left-0'
        style={{ top: openButtonRef?.current?.getBoundingClientRect().height }}
        ref={menuWrapperRef}
      >
        {/* A padder to make the gap between the hover button and the menu items larger */}
        <div className='h-4 w-full '></div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={`hoverMenuItem-${index}`}>
              <Link href={item.to}>
                <a
                  className={`relative block px-10 py-3 opacity-0 ${menuItemClassName}`}
                  ref={menuItemRefs[index]}
                  style={menuItemStyle}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
