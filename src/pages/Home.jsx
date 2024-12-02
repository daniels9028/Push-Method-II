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

const Home = () => {
  return (
    <div className="mt-24 max-w-[1444px] mx-auto py-4 lg:px-10 px-4">
      <Carousel
        autoplay
        loop
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
    </div>
  );
};

export default Home;
