import React, { useEffect, useRef, useState } from 'react';
import Div100Vh from 'react-div-100vh';

import NavComponent from './NavComponent';
import navItems from '../config/navItems';
import { useNavMenu } from '../context/navMenu';
import animate from '../utils/animate';
import NavLink from './NavLink';

export default function NavMobileMenu() {
  const menuOpen = useNavMenu();
  const nav = useRef(null);

  const [showMenu, setShowMenu] = useState(false);

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
          ref={nav}
          navClassName='opacity-0 z-10 bg-white w-full h-full flex flex-col justify-center items-center'
          data={navItems}
          renderItem={({ item }) => (
            <NavLink item={item} underlineClassName='ml-2' />
          )}
          liClassName='my-10'
        />
      </div>
    );

  return null;
}
