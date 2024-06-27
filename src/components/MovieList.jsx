import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/action.js'; // Ensure the correct path to your action file
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className='movie-list'>
      <h2>My Watchlist</h2>
      {movies.length ? (
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <p>No movies in your watchlist.</p>
      )}
    </div>
  );
};

export default MovieList;
