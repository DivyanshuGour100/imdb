import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div >
      <div className='flex sm:w-[430px] justify-between p-3 text-white w-[350px]'>
        <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' className='h-[45px] w-[80px]'></img></Link>
        <Link to ="movies/popular">Popular</Link>
        <Link to ="movies/top_rated">Top Rated</Link>
        <Link to ="movies/upcoming">Upcoming</Link>
      </div>
    </div>
  )
}

export default Header
