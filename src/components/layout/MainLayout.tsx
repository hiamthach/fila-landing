import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import FloatComponent from './FloatComponent';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99]">
        <FloatComponent />
      </div>
    </div>
  );
};

export default MainLayout;
