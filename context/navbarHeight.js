import React, { createContext, useContext, useState } from 'react';

const NavbarHeight = createContext();
const SetNavbarHeight = createContext();

export default function NavMenuProvider({ children }) {
  const [navbarHeight, setNavbarHeight] = useState(70);

  return (
    <NavbarHeight.Provider value={navbarHeight}>
      <SetNavbarHeight.Provider value={setNavbarHeight}>
        {children}
      </SetNavbarHeight.Provider>
    </NavbarHeight.Provider>
  );
}

export const useNavbarHeight = () => useContext(NavbarHeight);
export const useSetNavbarHeight = () => useContext(SetNavbarHeight);
