import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-[1444px] mx-auto py-4 lg:px-10 px-4 text-red-500 flex flex-row justify-between space-x-12">
        <div className="flex flex-col justify-center gap-3 lg:w-1/4">
          <h3>NETFLIX</h3>
          <p>
            Netflix is a streaming service that offers a variety of TV shows,
            movies, documentaries, and anime on internet-connected devices
          </p>
          <p>Ada pertanyaan? Hubungi 007-803-321-2148</p>
        </div>
        <div className="flex flex-row justify-center space-x-12 lg:w-2/4">
          <div className="space-y-2">
            <h3>NETFLIX</h3>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Movies</li>
              <li>Categories</li>
              <li>Pricing</li>
              <li>About</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3>SERVICE</h3>
            <ul className="space-y-1">
              <li>Pusat Bantuan</li>
              <li>Lowongan Kerja</li>
              <li>Ketentuan Penggunaan</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3>ACCOUNT</h3>
            <ul className="space-y-1">
              <li>Akun</li>
              <li>Tukar Kartu Hadiah</li>
              <li>Privasi</li>
              <li>Uji Kecepatan</li>
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
