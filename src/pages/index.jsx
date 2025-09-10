import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home/Home";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default React.memo(AppRouter);
