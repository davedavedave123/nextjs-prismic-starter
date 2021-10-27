import React from 'react';
import NavMenuProvider from './navMenu';
import SubMenuProvider from './SubMenu_mobile';
import PageMetadataProvider from './pageMetadata';
import NavbarHeightProvider from './navbarHeight';
import PhotoModalProvider from './photoModal';

export default function MasterContextProvider({ children }) {
  return (
    <NavMenuProvider>
      <SubMenuProvider>
        <PageMetadataProvider>
          <NavbarHeightProvider>
            <PhotoModalProvider>{children}</PhotoModalProvider>
          </NavbarHeightProvider>
        </PageMetadataProvider>
      </SubMenuProvider>
    </NavMenuProvider>
  );
}
