import { useEffect, useRef } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';

import MasterContextProvider from '../context/MasterContextProvider';
import Navbar from '../components/nav/Navbar';
import navItems from '../config/navItems';
import { useNavMenu } from '../context/navMenu';
import App from 'next/app';

import { Client } from '../utils/prismicHelpers';

import * as ga from '../lib/ga';

const Wrapper = ({ Component, pageProps, props }) => {
  const navMenuOpen = useNavMenu();

  return (
    <>
      <Navbar
        data={navItems}
        menu={props?.menu}
        twoLevelMenu={props.twoLevelMenu}
      />
      <div className={`w-screen ${navMenuOpen && ''}`}>
        <Component {...pageProps} />
      </div>
    </>
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
