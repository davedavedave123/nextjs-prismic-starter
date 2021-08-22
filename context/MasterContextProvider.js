import React from 'react';
import NavMenuProvider from './navMenu';

export default function MasterContextProvider({ children }) {
  return <NavMenuProvider>{children}</NavMenuProvider>;
}
