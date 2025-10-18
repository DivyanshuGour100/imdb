import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cart from '../Components/Cart';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(error => console.error("Error fetching data:", error));
    }
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:item-center md:grid-cols-6 gap-1.5">
                {movieList.map(movie => (
                    <Cart key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;
