import React, { useEffect, useRef, useState } from 'react';
import Div100Vh from 'react-div-100vh';
import { gsap } from 'gsap';

import NavSubMenu_Mobile from './NavSubMenu_mobile';
import NavComponent from './NavComponent';
// import navItems from '../../config/navItems';
import { useNavMenuIsOpen } from '../../context/navMenu';
import animate from '../../utils/animate';
import NavLink_Mobile from './NavLink_mobile';
import {
  useSetSubMenuIsOpen,
  useSubMenuIsOpen,
} from '../../context/SubMenu_mobile';

export default function NavMobileMenu({ navItems }) {
  const menuOpen = useNavMenuIsOpen();
  const subMenuIsOpen = useSubMenuIsOpen();
  const navWrapper = useRef(null);
  const navItemsRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const setSubMenuIsOpen = useSetSubMenuIsOpen();

  const handleOpen = () => {
    setShowMenu(true);
    setTimeout(() => {
      animate(navWrapper, { opacity: [0, 1] });
      animate(navItemsRef, { scale: [0.9, 1] });
    }, 0);
  };

  const handleClose = () => {
    animate(navWrapper, {
      opacity: [1, 0],
      // scale: [1, 0.9],
      onComplete: () => setShowMenu(false),
    });
    animate(navItemsRef, { scale: [1, 0.9] });
  };

  const handleSubMenuOpen = () => {
    gsap.to(navItemsRef.current, {
      x: -100,
      duration: 0.3,
      ease: 'power4.easeInOut',
    });
  };

  const handleSubMenuClose = () => {
    gsap.to(navItemsRef.current, {
      x: 0,
      duration: 0.3,
      ease: 'power4.easeInOut',
    });
  };

  useEffect(() => {
    if (subMenuIsOpen) handleSubMenuOpen();
    if (!subMenuIsOpen) handleSubMenuClose();
  }, [subMenuIsOpen]);

  useEffect(() => {
    if (menuOpen) handleOpen();
    if (!menuOpen) handleClose();
  }, [menuOpen]);

  if (showMenu)
    return (
      <div
        className='fixed z-30 top-0 left-0 bg-white w-screen h-screen opacity-0'
        data-options='scrolltop:false'
        ref={navWrapper}
      >
        <NavComponent
          keyPrefix='mobile-nav'
          navClassName='z-40 w-full h-full flex flex-col justify-center items-center'
          data={navItems}
          ref={navItemsRef}
          renderItem={({ item }) => (
            <NavLink_Mobile
              item={item}
              underlineClassName='ml-2'
              openSubMenu={() => setSubMenuIsOpen(true)}
            />
          )}
          // renderDropdown={NavSubMenu_Mobile}
          // dropdownMenuItemClassName='text-black hover:bg-gray-200 border-black border-b'
          liClassName='my-10'
        />
        <NavSubMenu_Mobile
          // closeSubMenu={() => setSubMenuIsOpen(false)}
          // subMenuIsOpen={subMenuIsOpen}
          menuItemClassName='text-2xl'
        />
      </div>
    );

  return null;
}
