import { useEffect, useRef } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import App from 'next/app';

// adapters
import { twoLevelMenu_adapter } from '../adapters/twoLevelMenu_adapter';

// components
import Navbar from '../components/nav/Navbar';
import Footer from '../components/Footer';

// context and config
import MasterContextProvider from '../context/MasterContextProvider';
import navItems from '../config/navItems';

// hooks
import { useNavMenuIsOpen, useSetNavMenuItems } from '../context/navMenu';
import { Client } from '../utils/prismicHelpers';

// google analytics
import * as ga from '../lib/ga';

const Wrapper = ({ Component, pageProps, props }) => {
  const navMenuOpen = useNavMenuIsOpen();
  const setNavMenuItems = useSetNavMenuItems();

  // Store nav items in context
  useEffect(() => {
    const navItems = twoLevelMenu_adapter(props.twoLevelMenu);
    setNavMenuItems(navItems);
  }, [props.twoLevelMenu]);

  return (
    <div className='w-screen relative'>
      {/* <Navbar /> */}
      {/* <div className={`w-screen ${navMenuOpen && ''}`}> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
};

function MyApp({ Component, pageProps, props }) {
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
      <Wrapper Component={Component} pageProps={pageProps} props={props} />
    </MasterContextProvider>
  );
}

MyApp.getInitialProps = async ctx => {
  const menu = (await Client().getSingle('menu')) || {};
  const twoLevelMenu = (await Client().getSingle('two_level_menu')) || {};
  const { props } = App.getInitialProps(ctx);

  return {
    props: { ...props, menu, twoLevelMenu },
  };
};

export default MyApp;
