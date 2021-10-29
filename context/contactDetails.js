import React, { createContext, useContext, useState } from 'react';

const ContactDetails = createContext();
const SetContactDetails = createContext();

export default function NavMenuProvider({ children }) {
  const [contactDetails, setContactDetails] = useState({
    form_mail_to: '',
    email: '',
    office_phone: '',
    mobile: '',
    address_line_1: '',
    address_line_2: '',
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
  });

  return (
    <ContactDetails.Provider value={contactDetails}>
      <SetContactDetails.Provider value={setContactDetails}>
        {children}
      </SetContactDetails.Provider>
    </ContactDetails.Provider>
  );
}

export const useContactDetails = () => useContext(ContactDetails);
export const useSetContactDetails = () => useContext(SetContactDetails);
