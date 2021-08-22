import MasterContextProvider from '../context/MasterContextProvider';
import '../styles/globals.css';

import Navbar from '../components/Navbar';
import NavLink from '../components/NavLink';
import navItems from '../config/navItems';

function MyApp({ Component, pageProps }) {
  return (
    <MasterContextProvider>
      <Navbar
        data={navItems}
        renderItem={({ item }) => <NavLink item={item} />}
        brandLogo={() => <div className='text-2xl'>hi this is the logo</div>}
      />
      <Component {...pageProps} />
    </MasterContextProvider>
  );
}

export default MyApp;
