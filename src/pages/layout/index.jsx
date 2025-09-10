import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default React.memo(MainLayout)



