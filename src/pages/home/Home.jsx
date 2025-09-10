import React from "react";
import Users from "../users";
import Products from "../products";

const Home = () => {
  return (
    <>
      <Users />
      <Products />
    </>
  );
};

export default React.memo(Home);
