import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home/Home";
import UsersDetail from "./users/hero/UsersDetail";
import UsersHero from "./users/hero/UsersHero";
import ProductsHero from "./products/hero/ProductHero";
import ProductDetailWrapper from "./products/hero/Wapper";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<UsersHero />} />
          <Route path="/users/:id" element={<UsersDetail />} />
          <Route path="/products" element={<ProductsHero />} />
          <Route path="/products/:id" element={<ProductDetailWrapper />} />
        </Route>
      </Routes>
    </>
  );
};

export default React.memo(AppRouter);
