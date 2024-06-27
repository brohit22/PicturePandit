import React from 'react';
import MovieList from '../components/MovieList.jsx';
import AddMovie from '../components/AddMovie.jsx';

const Watchlist = () => (
  <div className='watchlist'>
    <AddMovie />
    <MovieList />
  </div>
);

export default Watchlist;
