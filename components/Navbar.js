import React, { forwardRef } from 'react';
import useBreakPoints from '../hooks/useBreakPoints';
import BurgerBtn from './BurgerBtn';
import { useNavMenu, useSetNavMenu } from '../context/navMenu';
import NavComponent from './NavComponent';
// import unstyled from '../utility/unstyled';

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
 *
 * renderItem is some kind of Link component
 */

// export default function Navbar({
//   children,
//   renderItem,
//   data,
//   style_nav,
//   style_ul,
//   style_li,
//   keyPrefix,
//   navClassName,
//   ulClassName,
//   liClassName,
// }) {
//   const RenderItem = renderItem;
//   return <div>hi</div>;
// }

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
  // const RenderItem = renderItem;
  // const BrandLogo = brandLogo;
  const { isLgDown } = useBreakPoints();
  const menuOpen = useNavMenu();
  const setMenuOpen = useSetNavMenu();

  return (
    <>
      <NavMobileMenu />
      <div
        style={style_nav}
        className={`bg-white sticky z-30 top-0 left-0 w-full flex items-center justify-between ${navClassName}`}
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
            data={navItems}
            ulClassName='flex'
            navClassName='py-3'
          />
        )}
        {children}
      </div>
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
