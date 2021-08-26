import React, { useEffect, useRef, useState } from 'react';
import Div100Vh from 'react-div-100vh';
import { gsap } from 'gsap';

import NavSubMenu_Mobile from './NavSubMenu_Mobile';
import NavComponent from './NavComponent';
import navItems from '../config/navItems';
import { useNavMenu } from '../context/navMenu';
import animate from '../utils/animate';
import NavLink_Mobile from './NavLink_Mobile';
import {
  useSetSubMenuIsOpen,
  useSubMenuIsOpen,
} from '../context/SubMenu_mobile';

export default function NavMobileMenu() {
  const menuOpen = useNavMenu();
  const subMenuIsOpen = useSubMenuIsOpen();
  const nav = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const setSubMenuIsOpen = useSetSubMenuIsOpen();

  const handleOpen = () => {
    setShowMenu(true);
    setTimeout(() => animate(nav, { opacity: [0, 1], scale: [0.9, 1] }), 0);
  };

  const handleClose = () => {
    animate(nav, {
      opacity: [1, 0],
      scale: [1, 0.9],
      onComplete: () => setShowMenu(false),
    });
  };

  const handleSubMenuOpen = () => {
    gsap.to(nav.current, {
      x: -100,
      duration: 0.3,
      ease: 'power4.easeInOut',
    });
  };

  const handleSubMenuClose = () => {
    gsap.to(nav.current, {
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
        className='fixed z-50 top-0 left-0 w-screen h-screen'
        data-options='scrolltop:false'
      >
        <NavComponent
          keyPrefix='mobile-nav'
          ref={nav}
          navClassName='opacity-0 z-10 bg-white w-full h-full flex flex-col justify-center items-center'
          data={navItems}
          renderItem={({ item }) => (
            <NavLink_Mobile
              item={item}
              underlineClassName='ml-2'
              openSubMenu={() => setSubMenuIsOpen(true)}
            />
          )}
          // renderDropdown={NavSubMenu_Mobile}
          dropdownMenuItemClassName='text-black hover:bg-gray-200 border-black border-b'
          liClassName='my-10'
        />
        <NavSubMenu_Mobile
        // closeSubMenu={() => setSubMenuIsOpen(false)}
        // subMenuIsOpen={subMenuIsOpen}
        />
      </div>
    );

  return null;
}
