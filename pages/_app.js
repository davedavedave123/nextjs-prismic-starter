import { useEffect, useRef } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';

import MasterContextProvider from '../context/MasterContextProvider';
import Navbar from '../components/navOld2/Navbar';
import navItems from '../config/navItems';
import { useNavMenu } from '../context/navMenu';

import * as ga from '../lib/ga';

const Wrapper = ({ Component, pageProps }) => {
  const navMenuOpen = useNavMenu();

  return (
    <>
      <Navbar data={navItems} />
      <div className={`w-screen ${navMenuOpen && ''}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageView(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <MasterContextProvider>
      <Wrapper Component={Component} pageProps={pageProps} />
    </MasterContextProvider>
  );
}

export default MyApp;
