import Image from 'next/image';
import React from 'react';
import _Link from 'next/link';

import contact from '../config/contact';
import NavComponent from './nav/NavComponent';
import navItems from '../config/navItems';
import ContactForm from './ContactForm';

const Link = ({ item, aClassName, ...otherProps }) => {
  if (item?.title)
    return (
      <_Link href={item.to}>
        <a className={`relative ${aClassName}`} {...otherProps}>
          <div className='py-0'>{item.title}</div>
        </a>
      </_Link>
    );
  return null;
};

// MAKE ALL THESE INTO mailto tel and maps LINKS
const Contact = () => {
  const combinedAddress = `${contact?.details?.addressLine1} ${contact?.details?.addressLine2}`;
  const addressLink = `http://maps.google.com/?q=${combinedAddress}`;

  return (
    <div className='flex flex-col pb-10 my-10 border-b border-gray-300 lg:border-0 lg:block'>
      <div>
        <div className='w-60 h-10 relative'>
          <Image src='/images/logo.png' layout='fill' objectFit='cover' />
        </div>
        <div className='py-5'>
          <Link
            item={{
              title: contact?.details?.addressLine1,
              to: addressLink,
            }}
            aClassName='underline'
            target='_blank'
            rel='noreferrer'
          />
          <Link
            item={{
              title: contact?.details?.addressLine2,
              to: addressLink,
            }}
            aClassName='underline'
            target='_blank'
            rel='noreferrer'
          />
          {/* <div>{contact?.details?.addressLine1}</div>
        <div>{contact?.details?.addressLine2}</div> */}
        </div>
        <div>
          <Link
            item={{
              title: contact?.details?.email,
              to: `mailto:${contact?.details?.email}`,
            }}
            aClassName='underline'
          />
          <Link
            item={{
              title: contact?.details?.office,
              to: `tel:${contact?.details?.office}`,
            }}
            aClassName='underline'
          />
          <Link
            item={{
              title: contact?.details?.mobile,
              to: `tel:${contact?.details?.mobile}`,
            }}
            aClassName='underline'
          />
          {/* <div>{contact?.details?.office}</div>
        <div>{contact?.details?.mobile}</div> */}
        </div>
      </div>
    </div>
  );
};

const Links = () => (
  <div className='flex flex-col justify-center pb-10 my-10 border-b border-gray-300 lg:border-0 lg:block'>
    <NavComponent
      keyPrefix='footer-links'
      renderItem={({ item }) => <Link item={item} aClassName='text-2xl' />}
      data={navItems}
      liClassName='my-4 '
    />
  </div>
);

const SocialLink = ({ icon, to }) => {
  if (!to) return null;

  return (
    <div className='py-3'>
      <a
        href={to}
        target='_blank'
        rel='noreferrer'
        className='relative w-10 h-10 my-10'
      >
        <div className='w-10 h-10 relative'>
          <Image src={icon} layout='fill' objectFit='cover' />
        </div>
      </a>
    </div>
  );
};

const Socials = () => (
  <div className='flex flex-col pb-10 my-10 border-b border-gray-300 lg:border-0 lg:block'>
    <div>
      <h3>Follow us</h3>

      <SocialLink
        to={contact.socials.facebook}
        icon='/icons/facebook-white.svg'
      />
      <SocialLink
        to={contact.socials.instagram}
        icon='/icons/instagram-white.svg'
      />
      <SocialLink
        to={contact.socials.twitter}
        icon='/icons/twitter-white.svg'
      />
      <SocialLink
        to={contact.socials.linkedin}
        icon='/icons/linkedin-white.svg'
      />
    </div>
  </div>
);

const MadeByLink = () => {
  return (
    <div className='relative lg:absolute flex justify-center w-full bottom-0 left-0 pb-5 pt-5 lg:pt-0'>
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
    <div className='w-full relative p-5 lg:px-20 lg:py-5 bg-gray-800 lg:grid lg:grid-rows-1 lg:grid-cols-4 text-gray-300'>
      <Contact />
      <Links />
      <Socials />
      <div className='my-10'>
        <h3>Drop us a line</h3>
        <ContactForm variant={2} />
      </div>
      <MadeByLink />
    </div>
  );
}
