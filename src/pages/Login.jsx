import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import bg_login from "../assets/bg_login50.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    request_token: import.meta.env.VITE_REQUEST_KEY,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      const res = await axios.post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login",
        form,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      localStorage.setItem("refresh_token", res.data.request_token);
      setSuccess("Login was successfully");
      navigate("/");
    } catch (error) {
      setError(error.response.data.status_message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
            <div className="bg-black lg:w-[40%] w-full h-[600px] overflow-hidden rounded-lg bg-opacity-70 lg:px-14 px-7 py-7 lg:py-14">
              <p className="text-3xl font-bold tracking-wide text-white">
                Sign In
              </p>
              {error && (
                <p className="text-red-500 mt-4 tracking-wide">{error}</p>
              )}
              {success && (
                <p className="text-green-500 mt-4 tracking-wide">{success}</p>
              )}
              <input
                type="text"
                className="w-full px-4 mt-8 text-white placeholder-gray-400 transition-all border border-gray-700 rounded-lg h-14 bg-gray-900/50 focus:ring-2 focus:border-white focus:ring-white"
                placeholder="Email atau nomor ponsel"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                className="w-full px-4 mt-8 text-white placeholder-gray-400 transition-all border border-gray-700 rounded-lg h-14 bg-gray-900/50 focus:ring-2 focus:border-white focus:ring-white"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-2 mt-8 text-lg tracking-wide text-white transition-all bg-red-500 rounded-md disabled:bg-red-900"
              >
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
