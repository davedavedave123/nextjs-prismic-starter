import React from 'react';
import Link from 'next/link';

import NavDropdownMenu from '../components/NavDropdownMenu';
import Image from 'next/image';

const menuItems = [
  { title: 'first', to: '' },
  { title: 'second', to: '' },
  { title: 'third', to: '' },
  { title: 'fourth', to: '' },
  { title: 'fifth', to: '' },
];

const HoverMenuItem = () => (
  <div className='py-3 px-7 flex items-center'>
    Services
    <div className='pl-1'>
      <Image src='/icons/chevron-down.svg' height={15} width={15} />
    </div>
  </div>
);

export default function aboutUs() {
  return (
    <div className='w-full relative'>
      <div className='w-full h-40 flex justify-center items-center'>
        about us
      </div>
      <div className='w-full h-40 flex justify-center items-center'>
        <NavDropdownMenu
          menuItems={menuItems}
          HoverButton={HoverMenuItem}
          menuItemClassName='bg-white text-black hover:bg-gray-200 border-black border-b'
        />
      </div>
    </div>
  );
}
