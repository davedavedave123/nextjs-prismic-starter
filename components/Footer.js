import Image from 'next/image';
import React from 'react';
import _Link from 'next/link';

import contact from '../config/contact';
import NavComponent from '../components/NavComponent';
import navItems from '../config/navItems';
import ContactForm from './ContactForm';

const Link = ({ item }) => (
  <_Link href={item.to}>
    <a className='relative text-2xl'>
      <div className='py-0'>{item.title}</div>
    </a>
  </_Link>
);

// MAKE ALL THESE INTO mailto tel and maps LINKS
const Contact = () => (
  <div>
    <div className='w-60 h-60 relative'>
      <Image src='/images/GOPR9291.jpg' layout='fill' objectFit='cover' />
    </div>
    <div className='py-5'>
      <div>{contact?.details?.addressLine1}</div>
      <div>{contact?.details?.addressLine2}</div>
    </div>
    <div>
      <div>{contact?.details?.email}</div>
      <div>{contact?.details?.office}</div>
      <div>{contact?.details?.mobile}</div>
    </div>
  </div>
);

const Links = () => (
  <NavComponent
    keyPrefix='footer-links'
    renderItem={({ item }) => <Link item={item} />}
    data={navItems}
    liClassName='my-4'
  />
);

const SocialLink = ({ icon, to }) => {
  if (!to) return null;

  return (
    <div className='py-3'>
      <a href={to} target='_blank' className='relative w-10 h-10 my-10'>
        <div className='w-10 h-10 relative'>
          <Image src={icon} layout='fill' objectFit='cover' />
        </div>
      </a>
    </div>
  );
};

const Socials = () => (
  <div className=''>
    <h3>Follow us</h3>

    <SocialLink
      to={contact.socials.facebook}
      icon='/icons/facebook-white.svg'
    />
    <SocialLink
      to={contact.socials.instagram}
      icon='/icons/instagram-white.svg'
    />
    <SocialLink to={contact.socials.twitter} icon='/icons/twitter-white.svg' />
    <SocialLink
      to={contact.socials.linkedin}
      icon='/icons/linkedin-white.svg'
    />
  </div>
);

const MadeByLink = () => {
  return (
    <div className='absolute flex justify-center w-full bottom-0 left-0 pb-5'>
      <small>
        made with <span className='text-2xl'>🍍</span> by{' '}
        <a href='#' className='underline'>
          Tropics Web
        </a>
      </small>
    </div>
  );
};

export default function Footer() {
  return (
    <div className='w-full relative p-20 bg-gray-800 grid grid-cols-4 text-gray-300'>
      <Contact />
      <Links />
      <Socials />
      <div>
        <h3>Drop us a line</h3>
        <ContactForm variant={2} />
      </div>
      {/* <div className='w-full h-96'></div> */}
      <MadeByLink />
    </div>
  );
}
