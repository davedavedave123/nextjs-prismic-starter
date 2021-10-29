import React from 'react';
import NavMenuProvider from './navMenu';
import SubMenuProvider from './SubMenu_mobile';
import PageMetadataProvider from './pageMetadata';
import NavbarHeightProvider from './navbarHeight';
import PhotoModalProvider from './photoModal';
import ContactDetailsProvider from './contactDetails';

export default function MasterContextProvider({ children }) {
  return (
    <NavMenuProvider>
      <SubMenuProvider>
        <PageMetadataProvider>
          <NavbarHeightProvider>
            <PhotoModalProvider>
              <ContactDetailsProvider>{children}</ContactDetailsProvider>
            </PhotoModalProvider>
          </NavbarHeightProvider>
        </PageMetadataProvider>
      </SubMenuProvider>
    </NavMenuProvider>
  );
}
