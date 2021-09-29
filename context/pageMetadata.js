import React, { createContext, useContext, useState } from 'react';

const PageMetadata = createContext();
const SetPageMetadata = createContext();

export default function PageMetadataProvider({ children }) {
  const [pageMetadata, setPageMetadata] = useState({
    title: '',
    description: '',
  });

  return (
    <PageMetadata.Provider value={pageMetadata}>
      <SetPageMetadata.Provider value={setPageMetadata}>
        {children}
      </SetPageMetadata.Provider>
    </PageMetadata.Provider>
  );
}

export const usePageMetadata = () => useContext(PageMetadata);
export const useSetPageMetadata = () => useContext(SetPageMetadata);
