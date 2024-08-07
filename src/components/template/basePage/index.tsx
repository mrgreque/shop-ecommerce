import { Spacer } from '../../global/styled';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../organism/header';
import Footer from '../../organism/footer';
import { useEffect } from 'react';

const BasePageTemplate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <Spacer height="4em" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BasePageTemplate;
