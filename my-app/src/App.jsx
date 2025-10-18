import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import MovieList from './Components/MovieList';
import Movie from './Components/Movie';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie/>}></Route>
        <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='/' element={<h1>Error page</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
