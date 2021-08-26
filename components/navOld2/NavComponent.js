import React, { forwardRef } from 'react';
// import unstyled from '../utility/unstyled';

/**
 * Expects data as:
 * {
 *  title: 'Some Title',
 *  to: '/someroute'
 * },
 *
 * Key prefix is unique key attached to index 'someUniqueKey-1'
 *
 * renderItem is a Link component
 */

// NavComponent is meant to be the structure that you dress up however you want.

// LINKS:
// Pass a Link component in as renderItem to be used in the nav menu item map (data.map).
// In your Link component make sure you receive the item prop, ie:
// const LinkItemComponent ({item}) => <Link href={item.to}><a>{item.title}</a></Link>

// DROPDOWN:
// If your menu has any dropdown lists, pass in a dropdown component using renderDropdown
// Style the menuItem Link components by using dropdownMenuItemClassName and dropdownMenuItemStyle

// MOBILE DROPDOWN (sub menu):
// There is no dropdown menu for mobile, we use a submenu instead which slides in
// from the right – the same way you navigate through menus on a mobile app.
// The subMenuIsOpen and subMenuItems is handled through the SubMenu_mobile context.
// NavLink_mobile is the Link component to be used when building your NavMenu_mobile component.
// If an item (link) has a 'menuItems' array, this means there are sub menu items, NavLink_mobile will
// open the sub menu and repopulate the subMenuItems with the relevant ones.

const Nav = forwardRef(
  (
    {
      children,
      renderItem,
      renderDropdown,
      data,
      style_nav,
      style_ul,
      style_li,
      keyPrefix,
      navClassName,
      ulClassName,
      liClassName,
      dropdownMenuItemClassName,
      dropdownMenuItemStyle,
    },
    ref
  ) => {
    const RenderItem = renderItem;
    const RenderDropdown = renderDropdown;

    return (
      <nav
        style={style_nav}
        ref={ref}
        className={navClassName}
        data-options='scrolltop:false'
      >
        <ul style={style_ul} className={ulClassName}>
          {data.map(item => (
            <li
              style={{ ...styles.li, ...style_li }}
              key={`${keyPrefix}-${item.title}`}
              className={liClassName}
            >
              {item?.menuItems && RenderDropdown ? (
                <RenderDropdown
                  menuItems={item.menuItems}
                  HoverButton={() => <RenderItem item={item} />}
                  menuItemClassName={dropdownMenuItemClassName}
                  menuItemStyle={dropdownMenuItemStyle}
                />
              ) : (
                <RenderItem item={item} />
              )}
            </li>
          ))}
        </ul>
        {children}
      </nav>
    );
  }
);
Nav.displayName = 'NavComponent';

const styles = {
  li: {
    // padding: '5px 0',
    // margin: '15px 0',
    position: 'relative',
  },
  a: {
    backgroundColor: 'black',
    padding: '10px 15px',
    color: 'white',
  },
};

export default Nav;
