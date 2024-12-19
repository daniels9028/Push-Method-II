import React from "react";
import logo from "../assets/logo.png";
import bg_login from "../assets/bg_login50.png";

const Login = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover"
        style={{ backgroundImage: `url(${bg_login})` }}
      >
        <div className="max-w-[1444px] mx-auto lg:px-16 px-8 pb-10">
          <img
            src={logo}
            alt="logo_netflix"
            className="w-[120px] pt-8 cursor-pointer"
          />
          <div className="grid grid-cols-1 place-items-center lg:mt-15 mt-10">
            <div className="bg-black lg:w-[40%] w-full overflow-hidden rounded-lg bg-opacity-70 px-14 py-14">
              <p className="text-white text-3xl tracking-wide font-bold">
                Sign In
              </p>
              <input
                type="text"
                className="mt-8 w-full h-14 rounded-lg px-4 border bg-gray-900/50 placeholder-gray-400 text-white border-gray-700 focus:ring-2 focus:border-white focus:ring-white transition-all"
                placeholder="Email atau nomor ponsel"
              />
              <input
                type="text"
                className="mt-8 w-full h-14 rounded-lg px-4 border bg-gray-900/50 placeholder-gray-400 text-white border-gray-700 focus:ring-2 focus:border-white focus:ring-white transition-all"
                placeholder="Password"
              />
              <button className="text-white mt-8 w-full bg-red-600 rounded-md py-2 tracking-wide text-lg hover:bg-red-800 transition-all">
                Sign In
              </button>
              <p className="text-gray-700 text-center mt-4">OR</p>
              <button className="text-white mt-4 w-full bg-gray-800 rounded-md py-2 tracking-wide text-lg hover:bg-gray-900 transition-all">
                Use a Sign-In Code
              </button>{" "}
              <p className="text-white hover:text-gray-600 transition-all hover:underline text-center mt-4">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
