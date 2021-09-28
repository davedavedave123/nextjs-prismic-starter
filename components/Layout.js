import React from 'react';
import Head from 'next/head';

// components
import Footer from './Footer';
import Navbar from './nav/Navbar';

export default function Layout({ children }) {
  return (
    <main className='relative w-screen min-h-screen'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{/*pageTitle*/}</title>
        {/* <meta name='description' content={description} /> */}
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
