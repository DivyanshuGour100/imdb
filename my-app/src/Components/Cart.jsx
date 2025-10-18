import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'

const Cart = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (movie) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }, [movie])

  return (
    <>
      {isLoading ? (
        <div className="w-[200px] h-[300px]">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height="100%" width="100%" duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie?.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="w-[200px] h-[300px] relative group overflow-hidden rounded-lg shadow-lg">
            
            {/* Movie Poster */}
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.original_title}
            />

            {/* Movie Info (bottom left visible always) */}
            <div className="absolute bottom-2 left-2 text-xs font-bold z-10">
              <div>{movie?.original_title}</div>
              <div>{movie?.release_date}</div>
              <span className="bg-yellow-500 text-black px-1 rounded">
                {movie?.vote_average}
              </span>
            </div>

            {/* Slide Up Overview on Hover */}
            <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black bg-opacity-90 text-white text-xs p-3 flex items-center justify-center text-center transition-all duration-500 group-hover:bottom-0">
              <span className="line-clamp-6">{movie?.overview}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default Cart
