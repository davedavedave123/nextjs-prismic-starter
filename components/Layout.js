import React from 'react';
import Head from 'next/head';

// context
import { usePageMetadata } from '../context/pageMetadata';

// Use a pageMetadata context to load metadata

export default function Layout({ children, className }) {
  const page = usePageMetadata();

  return (
    <main className={`relative w-screen min-h-screen ${className}`}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{page?.title}</title>
        <meta name='description' content={page?.description} />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      {children}
    </main>
  );
}
