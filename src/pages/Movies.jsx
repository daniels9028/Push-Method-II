import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [load, setLoad] = useState(false);

  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Now Playing",
      active: true,
      params: "now_playing",
    },
    {
      id: 2,
      name: "Popular",
      active: false,
      params: "popular",
    },
    {
      id: 3,
      name: "Upcoming",
      active: false,
      params: "upcoming",
    },
    {
      id: 4,
      name: "Top Rated",
      active: false,
      params: "top_rated",
    },
  ]);

  const [page, setPage] = useState({
    page: 1,
    total_pages: 0,
    total_results: 0,
    params: "now_playing",
  });

  const apiKey = import.meta.env.VITE_API_KEY;

  const getAllMovies = async () => {
    try {
      setLoad(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${page.params}?language=en-US&page=${page.page}`,
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
        params: page.params,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  const handleNext = () => {
    setPage({ ...page, page: page.page + 1 });
  };

  const handleBack = () => {
    setPage({ ...page, page: page.page - 1 });
  };

  const handleChangeList = (index, params) => {
    let newArray = lists.map((list) => {
      return { ...list, active: false };
    });

    newArray[index].active = true;

    setLists(newArray);
    setPage({ ...page, params: params, page: 1 });
  };

  useEffect(() => {
    getAllMovies();
  }, [page.page, page.params]);

  return (
    <>
      <Navbar />
      <div className="my-32 max-w-[1444px] mx-auto py-4 lg:px-10 px-4">
        <div className="flex flex-col items-center justify-center gap-6 cursor-pointer lg:flex-row">
          {lists.map((list, index) => (
            <h3
              onClick={() => handleChangeList(index, list.params)}
              key={list.id}
              className={`text-lg font-bold tracking-wide text-gray-400 lg:text-2xl text-nowrap transition-all duration-100 ${
                list.active ? "underline decoration-solid text-gray-600" : ""
              }`}
            >
              {list.name}
            </h3>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-items-center">
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
          <div className="flex flex-row items-center justify-center gap-6 mt-10 text-white">
            <button
              onClick={handleBack}
              disabled={page.page === 1 || load}
              className="px-6 py-2 font-semibold tracking-wide transition-all bg-red-500 rounded-full hover:bg-red-700 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <p className="text-lg font-semibold text-white">{page.page}</p>
            <button
              onClick={handleNext}
              disabled={page.page === page.total_pages || load}
              className="px-6 py-2 font-semibold tracking-wide transition-all bg-red-500 rounded-full hover:bg-red-700 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-items-center">
            {upcoming?.map((item) => (
              <div
                className="h-[250px] w-[200px] border border-gray-700 shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500"
                key={item.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.id}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-6 mt-10 text-white">
            <button
              onClick={handleBackUpcoming}
              disabled={pageUpcoming.page === 1}
              className="px-6 py-2 font-semibold tracking-wide transition-all bg-red-500 rounded-full hover:bg-red-700 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <p className="text-lg font-semibold text-white">
              {pageUpcoming.page}
            </p>
            <button
              onClick={handleNextUpcoming}
              disabled={pageUpcoming.page === pageUpcoming.total_pages}
              className="px-6 py-2 font-semibold tracking-wide transition-all bg-red-500 rounded-full hover:bg-red-700 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default Movies;
