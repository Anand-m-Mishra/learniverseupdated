import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/header.jsx';
import Footer from './Components/Footer/footer.jsx';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
