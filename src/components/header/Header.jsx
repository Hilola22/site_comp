import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link to="/" className="text-white font-bold text-xl">
          LOGO
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link
            to="/users"
            className="text-white hover:text-gray-200 transition"
          >
            Users
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-gray-200 transition"
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
