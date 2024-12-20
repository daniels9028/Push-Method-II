import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import bg_login from "../assets/bg_login50.png";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleAuthentication = async () => {
    try {
      const options = {
        method: "POST",
        url: "https://api.themoviedb.org/3/authentication/token/validate_with_login",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        data: {
          username: "daniels9028",
          password: "daniel",
          request_token: "edb61a923902c40a960ef44e14eb98230ebb6a46",
        },
      };

      axios
        .request(options)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAuthentication();
  }, []);

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
          <div className="grid grid-cols-1 mt-10 place-items-center lg:mt-15">
            <div className="bg-black lg:w-[40%] w-full overflow-hidden rounded-lg bg-opacity-70 px-14 py-14">
              <p className="text-3xl font-bold tracking-wide text-white">
                Sign In
              </p>
              <input
                type="text"
                className="w-full px-4 mt-8 text-white placeholder-gray-400 transition-all border border-gray-700 rounded-lg h-14 bg-gray-900/50 focus:ring-2 focus:border-white focus:ring-white"
                placeholder="Email atau nomor ponsel"
              />
              <input
                type="text"
                className="w-full px-4 mt-8 text-white placeholder-gray-400 transition-all border border-gray-700 rounded-lg h-14 bg-gray-900/50 focus:ring-2 focus:border-white focus:ring-white"
                placeholder="Password"
              />
              <button className="w-full py-2 mt-8 text-lg tracking-wide text-white transition-all bg-red-600 rounded-md hover:bg-red-800">
                Sign In
              </button>
              <p className="mt-4 text-center text-gray-700">OR</p>
              <button className="w-full py-2 mt-4 text-lg tracking-wide text-white transition-all bg-gray-800 rounded-md hover:bg-gray-900">
                Use a Sign-In Code
              </button>{" "}
              <p className="mt-4 text-center text-white transition-all hover:text-gray-600 hover:underline">
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
