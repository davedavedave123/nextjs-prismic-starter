import React, { createContext, useContext, useState } from 'react';

const NavMenu = createContext();
const SetNavMenu = createContext();

export default function NavMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <NavMenu.Provider value={menuOpen}>
      <SetNavMenu.Provider value={setMenuOpen}>{children}</SetNavMenu.Provider>
    </NavMenu.Provider>
  );
}

export const useNavMenu = () => useContext(NavMenu);
export const useSetNavMenu = () => useContext(SetNavMenu);
