import React from 'react';
import NavMenuProvider from './navMenu';
import SubMenuProvider from './SubMenu_mobile';
import PageMetadataProvider from './pageMetadata';

export default function MasterContextProvider({ children }) {
  return (
    <NavMenuProvider>
      <SubMenuProvider>
        <PageMetadataProvider>{children}</PageMetadataProvider>
      </SubMenuProvider>
    </NavMenuProvider>
  );
}
