import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Movie = () => {
  const [currentMovieDetail, SetMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => SetMovie(data));
  };
  return (
    <div className="md:text-[15px] text-sm">
      <div className="flex items-center justify-center">
        <img
          className="w-[800px]  object-cover h-[600px] md:w-[1400px] relative rounded-md"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div>
        <img
          className="object-cover w-[230px] h-[310px] absolute md:top-124 left-25 rounded-md"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.poster_path : ""
          }`}
        />
      </div>
      <div className="">
        <h1 className="absolute left-90 top-120 text-white font-bold text-2xl ">{`${
          currentMovieDetail ? currentMovieDetail.title : ""
        }`}</h1>
        <p className="absolute left-90 top-130 text-white font-semibold">{`${
          currentMovieDetail ? currentMovieDetail.tagline : ""
        }`}</p>
        <p className="absolute left-90 top-137 text-white font-semibold flex">
          {`${currentMovieDetail ? currentMovieDetail.vote_average : ""}`}
          <FaStar className="mt-1 ml-1" />
          <span>
            ({`${currentMovieDetail ? currentMovieDetail.vote_count : ""}`})
          </span>
          <h3 className="ml-2">Votes</h3>
        </p>
        <h3 className="absolute left-90 top-144 text-white font-semibold">
          {`${currentMovieDetail ? currentMovieDetail.runtime : ""}`}Mins.
        </h3>
        <h4 className="absolute left-90 top-150 text-white font-semibold">
          Release Date-
          {`${currentMovieDetail ? currentMovieDetail.release_date : ""}`}
          <div className=" ">
            <p className="flex gap-5 text-white font-semibold  ">
              {" "}
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span
                        className="border-2 rounded-lg p-0.5 text-[9px] md:text-[15px]"
                        id={genre.id}
                      >
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </p>
          </div>
        </h4>

        <div className="w-[250px] md:w-[850px]   ml-90 md:mt-4  text-white">
          <h1 className="text-2xl font-semibold">Synopsis</h1>
          <div>{`${
            currentMovieDetail ? currentMovieDetail.overview : ""
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
