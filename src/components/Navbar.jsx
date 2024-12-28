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
    <div className="fixed top-0 left-0 z-50 w-full bg-black border-b-2 border-gray-800 shadow-md bg-opacity-90 backdrop-blur-md shadow-gray-900">
      <nav className="max-w-[1444px] mx-auto h-24 py-4 lg:px-10 px-4 flex justify-between items-center">
        <img src={logo} alt="logo" className="z-50 w-24 bg-contain" />
        <ul className="items-center justify-center hidden gap-8 font-bold text-red-500 cursor-pointer lg:flex">
          <Link to="/" className="transition-colors hover:text-red-600">
            Home
          </Link>
          <Link to="/movies" className="transition-colors hover:text-red-600">
            Movies
          </Link>
          <li className="transition-colors hover:text-red-600">Categories</li>
          <li className="transition-colors hover:text-red-600">Pricing</li>
          <li className="transition-colors hover:text-red-600">About</li>
        </ul>
        <button
          className="hidden px-4 py-2 text-white transition-colors bg-red-500 rounded-xl hover:text-gray-400 hover:bg-red-600 lg:flex"
          onClick={handleNavbar}
        >
          {refresh_token ? "Logout" : "Login"}
        </button>
        <div className="z-50 flex cursor-pointer lg:hidden">
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
        className="fixed top-0 right-0 z-40 flex flex-col items-center justify-center w-full h-screen gap-4 bg-black lg:hidden"
      >
        <ul className="flex flex-col items-center justify-center gap-4 mt-10 font-bold text-red-500 cursor-pointer lg:hidden">
          <Link to="/" className="transition-colors hover:text-red-600">
            Home
          </Link>
          <Link to="/movies" className="transition-colors hover:text-red-600">
            Movies
          </Link>
          <li className="transition-colors hover:text-red-600">Categories</li>
          <li className="transition-colors hover:text-red-600">Pricing</li>
          <li className="transition-colors hover:text-red-600">About</li>
        </ul>
        <Link to="/login">
          <button className="flex px-4 py-2 text-white transition-colors bg-red-500 rounded-xl hover:text-gray-400 hover:bg-red-600 lg:hidden">
            Login
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
