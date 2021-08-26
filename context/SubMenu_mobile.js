import React, { createContext, useContext, useState } from 'react';

const SubMenuIsOpen = createContext();
const SetSubMenuIsOpen = createContext();
const SubMenuItems = createContext();
const SetSubMenuItems = createContext();

export default function SubMenuProvider({ children }) {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);

  return (
    <SubMenuIsOpen.Provider value={subMenuIsOpen}>
      <SetSubMenuIsOpen.Provider value={setSubMenuIsOpen}>
        <SubMenuItems.Provider value={subMenuItems}>
          <SetSubMenuItems.Provider value={setSubMenuItems}>
            {children}
          </SetSubMenuItems.Provider>
        </SubMenuItems.Provider>
      </SetSubMenuIsOpen.Provider>
    </SubMenuIsOpen.Provider>
  );
}

export const useSubMenuIsOpen = () => useContext(SubMenuIsOpen);
export const useSetSubMenuIsOpen = () => useContext(SetSubMenuIsOpen);
export const useSubMenuItems = () => useContext(SubMenuItems);
export const useSetSubMenuItems = () => useContext(SetSubMenuItems);
