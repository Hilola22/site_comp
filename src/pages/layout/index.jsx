import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../components/header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F8F8]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default React.memo(MainLayout)



