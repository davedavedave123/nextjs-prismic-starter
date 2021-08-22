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
 * renderItem is some kind of Link component
 */
// Still needs to be wrapped in <nav>
const Nav = forwardRef(
  (
    {
      children,
      renderItem,
      data,
      style_nav,
      style_ul,
      style_li,
      keyPrefix,
      navClassName,
      ulClassName,
      liClassName,
    },
    ref
  ) => {
    const RenderItem = renderItem;

    return (
      <nav style={style_nav} ref={ref} className={navClassName}>
        <ul style={style_ul} className={ulClassName}>
          {data.map(item => (
            <li
              style={{ ...styles.li, ...style_li }}
              key={`${keyPrefix}-${item.title}`}
              className={liClassName}
            >
              <RenderItem item={item} />
            </li>
          ))}
        </ul>
        {children}
      </nav>
    );
  }
);

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
