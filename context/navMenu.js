import React, { createContext, useContext, useState } from 'react';

const NavMenuIsOpen = createContext();
const SetNavMenuIsOpen = createContext();
const NavMenuItems = createContext();
const SetNavMenuItems = createContext();

export default function NavMenuProvider({ children }) {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <NavMenuIsOpen.Provider value={navMenuIsOpen}>
      <SetNavMenuIsOpen.Provider value={setNavMenuIsOpen}>
        <NavMenuItems.Provider value={items}>
          <SetNavMenuItems.Provider value={setItems}>
            {children}
          </SetNavMenuItems.Provider>
        </NavMenuItems.Provider>
      </SetNavMenuIsOpen.Provider>
    </NavMenuIsOpen.Provider>
  );
}

export const useNavMenuIsOpen = () => useContext(NavMenuIsOpen);
export const useSetNavMenuIsOpen = () => useContext(SetNavMenuIsOpen);
export const useNavMenuItems = () => useContext(NavMenuItems);
export const useSetNavMenuItems = () => useContext(SetNavMenuItems);
