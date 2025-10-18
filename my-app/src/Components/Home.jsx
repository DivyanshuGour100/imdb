import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MovieList from './MovieList';



const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,       
    slidesToScroll: 1,     
    autoplay: true,
    autoplaySpeed: 3000
  };

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  return (
    <div className="slider-container w-full max-w-[1300px] mx-auto">
      <Slider {...settings}>
        {
          popularMovies.map((movie, index) => (
            <Link  to={`/movie/${movie.id}`} >
            <div key={index} className='relative'>
              <img 
                className="w-full h-[600px] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
              />
              <div className='absolute top-60 gap-3 flex flex-col left-4 text-white font-bold  bg-opacity-50 px-4 py-2 rounded'>
              <h1 className='text-4xl '>{movie.title}</h1>
              <div className='flex gap-6'><h1>{movie.release_date} </h1><span className='flex relative'>{movie.vote_average}<FaStar className='absolute left-11 top-1'/>
              <FaStar className='absolute left-15 top-1'/>
              <FaStar className='absolute left-19 top-1'/></span></div>
               <p className='w-[350px] font-semibold'>{movie.overview}</p>
              </div>
            </div>
            </Link>
          ))
          
        }
      </Slider>
       <MovieList/> 

    </div>
  )
}

export default Home
