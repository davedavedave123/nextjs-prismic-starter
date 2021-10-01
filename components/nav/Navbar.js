import React, {
  forwardRef,
  useEffect,
  useRef,
  createContext,
  useContext,
  useMemo,
} from 'react';

import useBreakPoints from '../../hooks/useBreakPoints';
import BurgerBtn from '../BurgerBtn';
import {
  useNavMenuIsOpen,
  useNavMenuItems,
  useSetNavMenuIsOpen,
} from '../../context/navMenu';
import NavComponent from './NavComponent';
import NavDropdownMenu from './NavDropdownMenu';

import NavLink from './NavLink';
import BrandLogo from '../BrandLogo';
import NavMenu_mobile from './NavMenu_mobile';

// context
import {
  useSetNavbarHeight,
  useNavbarHeight,
} from '../../context/navbarHeight';

/**
 * Exects data as:
 * {
 *  title: 'Some Title',
 *  to: '/someroute'
 * },
 *
 * Key prefix is unique key that has the index attached: 'someUniqueKey-1'
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
  menu,
  twoLevelMenu,
}) {
  const { isLgDown } = useBreakPoints();
  const menuOpen = useNavMenuIsOpen();
  const setMenuOpen = useSetNavMenuIsOpen();

  const navItems = useNavMenuItems();
  const setNavbarHeight = useSetNavbarHeight();

  const navbarRef = useRef(null);

  useMemo(() => {
    if (navbarRef?.current) {
      const rect = navbarRef?.current.getBoundingClientRect();
      setNavbarHeight(rect.height);
    }
  }, [navbarRef]);

  return (
    <>
      {/* <div className='absolute top-0 left-0 w-full h-full z-50' ref={navRef}> */}
      <div
        style={{ ...style_nav }}
        className={`border-b border-black fixed z-40 top-0 left-0 w-full flex items-center justify-between ${navClassName}`}
        ref={navbarRef}
      >
        {/* Brand logo */}
        <div className='relative pl-5'>
          <BrandLogo />
        </div>

        {/* Nav links, change break point if you need */}
        {isLgDown ? (
          <>
            <BurgerBtn
              onClick={() => setMenuOpen(!menuOpen)}
              menuOpen={menuOpen}
            />
            <NavMenu_mobile navItems={navItems} />
          </>
        ) : (
          <NavComponent
            keyPrefix='navbar'
            renderItem={({ item }) => <NavLink item={item} />}
            renderDropdown={NavDropdownMenu}
            data={navItems}
            ulClassName='flex'
            navClassName='py-3 z-40'
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

export const NavbarPadder = () => {
  const navbarHeight = useNavbarHeight();

  return <div className='w-full=' style={{ height: navbarHeight }} />;
};

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
