import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

// context
import {
  useSetSubMenuIsOpen,
  useSubMenuIsOpen,
  useSubMenuItems,
} from '../context/SubMenu_mobile';

import { getCurrentRefs } from '../utils/animate';

const DEFAULTS = { duration: 0.3, ease: 'power4.easeInOut' };

export default function NavSubMenu_Mobile({
  menuItems,
  HoverButton,
  menuItemClassName,
  menuItemStyle,
  // subMenuIsOpen,
  // closeSubMenu,
}) {
  const subMenuIsOpen = useSubMenuIsOpen();
  const setSubMenuIsOpen = useSetSubMenuIsOpen();
  const subMenuItems = useSubMenuItems();

  const wrapperRef = useRef(null);
  const openButtonRef = useRef(null);

  const [menuItemRefs, setMenuItemRefs] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState(false);

  // useEffect(() => {
  //   const newArr = Array(menuItems.length)
  //     .fill()
  //     .map((_, i) => menuItemRefs[i] || createRef());
  //   setMenuItemRefs(newArr);
  // }, [menuItems.length]);

  const handleOpen = () => {
    gsap.from(wrapperRef.current, {
      x: '100vw',
      ...DEFAULTS,
    });
  };

  const handleClose = () => {
    gsap.to(wrapperRef.current, {
      x: '100vw',
      onComplete: () => setShowSubMenu(false),
      ...DEFAULTS,
    });
  };

  useEffect(() => {
    if (subMenuIsOpen) {
      setShowSubMenu(true);
      setTimeout(handleOpen, 0);
      // handleOpen();
    }
    if (!subMenuIsOpen) handleClose();
  }, [subMenuIsOpen]);

  // useEffect(() => {
  //   if (subMenuIsOpen) handleOpen();
  //   if (!subMenuIsOpen) handleClose();
  // }, [subMenuIsOpen]);

  if (showSubMenu)
    return (
      // <button
      //   className='relative'
      //   // onMouseEnter={handleHover}
      //   // onMouseLeave={handleUnhover}
      //   onClick={() => setMenuOpen(!menuOpen)}
      // >
      //   <div ref={openButtonRef} className='relative'>
      //     <HoverButton />
      //     <div className='absolute right-5 top-0 h-full inline-block'>
      //       <div className='h-full flex items-center transform -rotate-90'>
      //         <Image src='/icons/chevron-down.svg' height={15} width={15} />
      //       </div>
      //     </div>
      //   </div>
      //   <div
      //     className='w-72 h-0 overflow-hidden absolute left-0'
      //     style={{ top: openButtonRef?.current?.getBoundingClientRect().height }}
      //     ref={menuWrapperRef}
      //   >
      //     {/* A padder to make the gap between the hover button and the menu items larger */}
      //     <div className='h-4 w-full '></div>
      //     <ul>
      //       {menuItems.map((item, index) => (
      //         <li key={`hoverMenuItem-${index}`}>
      //           <Link href={item.to}>
      //             <a
      //               className={`relative block px-10 py-3 opacity-0 ${menuItemClassName}`}
      //               ref={menuItemRefs[index]}
      //               style={menuItemStyle}
      //             >
      //               {item.title}
      //             </a>
      //           </Link>
      //         </li>
      //       ))}
      //     </ul>
      //   </div>
      // </button>
      <div
        className='w-screen h-screen absolute top-0 left-0 bg-white flex flex-col justify-center items-center'
        // style={{ marginLeft: '100vw' }}
        ref={wrapperRef}
      >
        Hi this is sub menu
        <button onClick={() => setSubMenuIsOpen(false)}>Close</button>
        <ul>
          {subMenuItems.map((item, index) => (
            <li key={`submenuitem-${index}`}>{item.title}</li>
          ))}
        </ul>
      </div>
    );

  return null;
}
