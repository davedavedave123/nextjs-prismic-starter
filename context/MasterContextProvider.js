import React from 'react';
import NavMenuProvider from './navMenu';
import SubMenuProvider from './SubMenu_mobile';
import PageMetadataProvider from './pageMetadata';
import NavbarHeightProvider from './navbarHeight';

export default function MasterContextProvider({ children }) {
  return (
    <NavMenuProvider>
      <SubMenuProvider>
        <PageMetadataProvider>
          <NavbarHeightProvider>{children}</NavbarHeightProvider>
        </PageMetadataProvider>
      </SubMenuProvider>
    </NavMenuProvider>
  );
}
