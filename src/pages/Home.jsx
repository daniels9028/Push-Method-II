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

import Asked from "../components/Asked";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const askeds = [
  {
    id: 1,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR 54,000 to IDR 186,000 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "Where can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
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
        <Asked askeds={askeds} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
