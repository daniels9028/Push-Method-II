import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const refresh_token = localStorage.getItem("refresh_token");

  const handleNavbar = () => {
    if (refresh_token) {
      localStorage.clear();
    }

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };
  return (
    <div className="w-full fixed left-0 top-0 bg-black bg-opacity-90 backdrop-blur-md z-50 border-b-2 border-gray-800 shadow-md shadow-gray-900">
      <nav className="max-w-[1444px] mx-auto h-24 py-4 lg:px-10 px-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-24 bg-contain z-50" />
        <ul className="lg:flex hidden items-center justify-center gap-8 cursor-pointer text-red-500 font-bold">
          <Link to="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link to="/movies" className="hover:text-red-600 transition-colors">
            Movies
          </Link>
          <li className="hover:text-red-600 transition-colors">Categories</li>
          <li className="hover:text-red-600 transition-colors">Pricing</li>
          <li className="hover:text-red-600 transition-colors">About</li>
        </ul>
        <button
          className="bg-red-500 py-2 px-4 rounded-xl text-white hover:text-gray-400 hover:bg-red-600 lg:flex hidden transition-colors"
          onClick={handleNavbar}
        >
          {refresh_token ? "Logout" : "Login"}
        </button>
        <div className="lg:hidden flex cursor-pointer z-50">
          {nav ? (
            <IoClose color="red" size={30} onClick={() => setNav(!nav)} />
          ) : (
            <GiHamburgerMenu
              color="red"
              size={30}
              onClick={() => setNav(!nav)}
            />
          )}
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="lg:hidden flex flex-col justify-center items-center fixed w-full top-0 right-0 h-screen bg-black z-40 gap-4"
      >
        <ul className="lg:hidden flex flex-col items-center justify-center mt-10 gap-4 cursor-pointer text-red-500 font-bold">
          <li className="hover:text-red-600 transition-colors">Home</li>
          <li className="hover:text-red-600 transition-colors">Movies</li>
          <li className="hover:text-red-600 transition-colors">Categories</li>
          <li className="hover:text-red-600 transition-colors">Pricing</li>
          <li className="hover:text-red-600 transition-colors">About</li>
        </ul>
        <Link to="/login">
          <button className="bg-red-500 py-2 px-4 rounded-xl text-white hover:text-gray-400 hover:bg-red-600 lg:hidden flex transition-colors">
            Login
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
