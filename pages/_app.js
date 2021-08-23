import MasterContextProvider from '../context/MasterContextProvider';
import '../styles/globals.css';

import Navbar from '../components/Navbar';
import NavLink from '../components/NavLink';
import navItems from '../config/navItems';
import { useNavMenu } from '../context/navMenu';
import animateOnScroll from '../utils/animateOnScroll';
import { useEffect } from 'react';

const Wrapper = ({ Component, pageProps }) => {
  const navMenuOpen = useNavMenu();

  useEffect(() => {
    animateOnScroll();
  }, []);

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
  return (
    <MasterContextProvider>
      <Wrapper Component={Component} pageProps={pageProps} />
    </MasterContextProvider>
  );
}

export default MyApp;
