import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import logo_netflix from "../assets/logo_netflix.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t-2 border-gray-800 shadow-md shadow-gray-900">
      <div className="max-w-[1444px] mx-auto py-4 lg:px-10 px-4 text-gray-300 flex flex-row justify-between space-x-12">
        <div className="flex flex-col justify-center gap-3 lg:w-1/4">
          <div className="flex items-center gap-2">
            <img
              src={logo_netflix}
              alt="logo footer"
              className="w-10 h-10 object-cover"
            />
            <p className="font-medium text-red-500 tracking-widest text-3xl">
              NETFLIX
            </p>
          </div>
          <p className="text-lg tracking-tight">
            Netflix is a streaming service that offers a variety of TV shows,
            movies, documentaries, and anime on internet-connected devices
          </p>
          <p className="text-base tracking-tight">
            Ada pertanyaan? Hubungi 007-803-321-2148
          </p>
        </div>
        <div className="flex flex-row justify-center space-x-12 lg:w-2/4">
          <div className="space-y-2">
            <h3>NETFLIX</h3>
            <ul className="space-y-1 cursor-pointer">
              <li className="hover:underline hover:text-gray-500 transition-all">
                Home
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Movies
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Categories
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Pricing
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                About
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3>SERVICE</h3>
            <ul className="space-y-1 cursor-pointer">
              <li className="hover:underline hover:text-gray-500 transition-all">
                Pusat Bantuan
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Lowongan Kerja
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Ketentuan Penggunaan
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Hubungi Kami
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3>ACCOUNT</h3>
            <ul className="space-y-1">
              <li className="hover:underline hover:text-gray-500 transition-all">
                Akun
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Tukar Kartu Hadiah
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Privasi
              </li>
              <li className="hover:underline hover:text-gray-500 transition-all">
                Uji Kecepatan
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:w-1/4">
          <h3>FOLLOW</h3>
          <div className="flex space-x-4 cursor-pointer">
            <FaTwitter color="white" size={18} />
            <FaFacebook color="white" size={18} />
            <FaPinterestP color="white" size={18} />
            <FaInstagram color="white" size={18} />
            <FaYoutube color="white" size={18} />
            <FaGooglePlusG color="white" size={18} />
            <FaGooglePlay color="white" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
