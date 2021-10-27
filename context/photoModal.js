import React, { createContext, useContext, useState } from 'react';

const PhotoModalIsOpen = createContext();
const SetPhotoModalIsOpen = createContext();
const PhotoIndex = createContext();
const SetPhotoIndex = createContext();

export default function PhotoModalProvider({ children }) {
  const [photoModalIsOpen, setPhotoModalIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <PhotoModalIsOpen.Provider value={photoModalIsOpen}>
      <SetPhotoModalIsOpen.Provider value={setPhotoModalIsOpen}>
        <PhotoIndex.Provider value={photoIndex}>
          <SetPhotoIndex.Provider value={setPhotoIndex}>
            {children}
          </SetPhotoIndex.Provider>
        </PhotoIndex.Provider>
      </SetPhotoModalIsOpen.Provider>
    </PhotoModalIsOpen.Provider>
  );
}

export const usePhotoModalIsOpen = () => useContext(PhotoModalIsOpen);
export const useSetPhotoModalIsOpen = () => useContext(SetPhotoModalIsOpen);
export const usePhotoIndex = () => useContext(PhotoIndex);
export const useSetPhotoIndex = () => useContext(SetPhotoIndex);
