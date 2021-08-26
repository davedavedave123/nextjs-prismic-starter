import React from 'react';
import NavMenuProvider from './navMenu';
import SubMenuProvider from './SubMenu_mobile';

export default function MasterContextProvider({ children }) {
  return (
    <NavMenuProvider>
      <SubMenuProvider>{children}</SubMenuProvider>
    </NavMenuProvider>
  );
}
