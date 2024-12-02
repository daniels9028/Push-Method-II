import React from "react";
import { Carousel } from "@material-tailwind/react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import Trending from "../components/Trending";

import trend1 from "../assets/trending/trend1.webp";
import trend2 from "../assets/trending/trend2.webp";
import trend3 from "../assets/trending/trend3.webp";
import trend4 from "../assets/trending/trend4.webp";
import trend5 from "../assets/trending/trend5.webp";
import trend6 from "../assets/trending/trend6.webp";
import trend7 from "../assets/trending/trend7.webp";
import trend8 from "../assets/trending/trend8.webp";
import trend9 from "../assets/trending/trend9.webp";
import trend10 from "../assets/trending/trend10.webp";

import netflix1 from "../assets/onlyInNetflix/netflix1.webp";
import netflix2 from "../assets/onlyInNetflix/netflix2.webp";
import netflix3 from "../assets/onlyInNetflix/netflix3.webp";
import netflix4 from "../assets/onlyInNetflix/netflix4.webp";
import netflix5 from "../assets/onlyInNetflix/netflix5.webp";
import netflix6 from "../assets/onlyInNetflix/netflix6.webp";
import netflix7 from "../assets/onlyInNetflix/netflix7.webp";
import netflix8 from "../assets/onlyInNetflix/netflix8.webp";
import netflix9 from "../assets/onlyInNetflix/netflix9.webp";
import netflix10 from "../assets/onlyInNetflix/netflix10.webp";
import OnlyInNetflix from "../components/OnlyInNetflix";

import { FaComputer } from "react-icons/fa6";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";
import { FaSmileBeam } from "react-icons/fa";

import Reason from "../components/Reason";

const trends = [
  {
    id: 1,
    image: trend1,
  },
  {
    id: 2,
    image: trend2,
  },
  {
    id: 3,
    image: trend3,
  },
  {
    id: 4,
    image: trend4,
  },
  {
    id: 5,
    image: trend5,
  },
  {
    id: 6,
    image: trend6,
  },
  {
    id: 7,
    image: trend7,
  },
  {
    id: 8,
    image: trend8,
  },
  {
    id: 9,
    image: trend9,
  },
  {
    id: 10,
    image: trend10,
  },
];

const netflixs = [
  {
    id: 1,
    image: netflix1,
  },
  {
    id: 2,
    image: netflix2,
  },
  {
    id: 3,
    image: netflix3,
  },
  {
    id: 4,
    image: netflix4,
  },
  {
    id: 5,
    image: netflix5,
  },
  {
    id: 6,
    image: netflix6,
  },
  {
    id: 7,
    image: netflix7,
  },
  {
    id: 8,
    image: netflix8,
  },
  {
    id: 9,
    image: netflix9,
  },
  {
    id: 10,
    image: netflix10,
  },
];

const reasons = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <FaComputer />,
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    icon: <FaRegArrowAltCircleDown />,
  },
  {
    id: 3,
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <IoTelescope />,
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: <FaSmileBeam />,
  },
];

const Home = () => {
  return (
    <div className="mt-24 max-w-[1444px] mx-auto py-4 lg:px-10 px-4">
      <Carousel
        autoplay
        loop
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={banner1}
          alt="image 1"
          className="w-full h-[500px] object-cover"
        />
        <img
          src={banner2}
          alt="image 2"
          className="w-full h-[500px] object-cover"
        />
        <img
          src={banner3}
          alt="image 3"
          className="w-full h-[500px] object-cover"
        />
      </Carousel>

      <Trending trends={trends} />
      <OnlyInNetflix netflixs={netflixs} />
      <Reason reasons={reasons} />
    </div>
  );
};

export default Home;
