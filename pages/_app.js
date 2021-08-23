import { useEffect } from 'react';
import MasterContextProvider from '../context/MasterContextProvider';
import '../styles/globals.css';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import NavLink from '../components/NavLink';
import navItems from '../config/navItems';
import { useNavMenu } from '../context/navMenu';

import * as ga from '../lib/ga';

const Wrapper = ({ Component, pageProps }) => {
  const navMenuOpen = useNavMenu();

  return (
    <div className={`w-screen ${navMenuOpen && ''}`}>
      <Navbar
        data={navItems}
        renderItem={({ item }) => <NavLink item={item} />}
        brandLogo={() => <div className='text-2xl'>hi this is the logo</div>}
        navClassName='absolute top-0 left-0'
      />
      <Component {...pageProps} />
    </div>
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
