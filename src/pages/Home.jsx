import React from "react";
import { Carousel } from "@material-tailwind/react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

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
    </div>
  );
};

export default Home;
