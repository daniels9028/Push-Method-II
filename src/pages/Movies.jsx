import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import Card from "../components/Card";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState({
    page: 1,
    total_pages: 0,
    total_results: 0,
  });

  const apiKey = import.meta.env.VITE_API_KEY;

  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page.page}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setMovies(res.data.results);
      setPage({
        ...page,
        total_pages: res.data.total_pages,
        total_results: res.data.total_results,
        page: res.data.page,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setPage({ ...page, page: page.page + 1 });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    getAllMovies();
  }, [page.page]);

  return (
    <>
      <Navbar />
      <div className="my-24 max-w-[1444px] mx-auto py-4 lg:px-10 px-4">
        {/* <h3 className="text-4xl font-bold text-gray-500 tracking-wide">
          Trending Now
        </h3> */}
        <div className="flex w-full justify-center items-center flex-col">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8 place-items-center">
            {movies?.map((movie) => (
              <div
                className="h-[250px] w-[200px] border border-gray-700 shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.id}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-6 text-white mt-10">
            <button className="bg-red-500 py-2 px-6 rounded-full tracking-wide font-semibold hover:bg-red-700 transition-all">
              Back
            </button>
            <p className="text-white font-semibold text-lg">{page.page}</p>
            <button
              onClick={handleNext}
              className="bg-red-500 py-2 px-6 rounded-full tracking-wide font-semibold hover:bg-red-700 transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Movies;
