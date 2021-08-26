import React, { forwardRef, useEffect, useRef } from 'react';

import useBreakPoints from '../hooks/useBreakPoints';
import BurgerBtn from './BurgerBtn';
import { useNavMenu, useSetNavMenu } from '../context/navMenu';
import NavComponent from './NavComponent';
import NavDropdownMenu from './NavDropdownMenu';

import NavLink from './NavLink';
import navItems from '../config/navItems';
import BrandLogo from './BrandLogo';
import NavMobileMenu from './NavMobileMenu';

/**
 * Exects data as:
 * {
 *  title: 'Some Title',
 *  to: '/someroute'
 * },
 *
 * Key prefix is unique key attached to index 'someUniqueKey-1'
 */

export default function Navbar({
  children,
  // renderItem,
  data,
  style_nav,
  style_ul,
  style_li,
  keyPrefix,
  navClassName,
  ulClassName,
  liClassName,
}) {
  const { isLgDown } = useBreakPoints();
  const menuOpen = useNavMenu();
  const setMenuOpen = useSetNavMenu();

  return (
    <>
      <NavMobileMenu />
      {/* <div className='absolute top-0 left-0 w-full h-full z-50' ref={navRef}> */}
      <div
        style={style_nav}
        className={`border-b border-black fixed z-50 top-0 left-0 w-full flex items-center justify-between ${navClassName}`}
      >
        {/* Brand logo */}
        <div className='relative pl-5'>
          <BrandLogo />
        </div>

        {/* Nav links, change break point if you need */}
        {isLgDown ? (
          <BurgerBtn
            onClick={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        ) : (
          <NavComponent
            keyPrefix='navbar'
            renderItem={({ item }) => <NavLink item={item} />}
            renderDropdown={NavDropdownMenu}
            data={navItems}
            ulClassName='flex'
            navClassName='py-3'
            dropdownMenuItemClassName='text-black hover:bg-gray-200 border-black border-b'
            // dropdownMenuItemStyle={{ backgroundColor: 'rgba(255,255,255,0.5' }}
          />
        )}
        {children}
      </div>
      {/* </div> */}
    </>
  );
}
const styles = {
  li: {
    padding: '5px 0',
    margin: '15px 0',
  },
  a: {
    backgroundColor: 'black',
    padding: '10px 15px',
    color: 'white',
  },
};
