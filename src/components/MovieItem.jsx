import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../redux/action.js';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  return (
    <div className='movie-item'>
      <img src={movie.thumbnail} alt={movie.title} />
      <div>
        <h3>Movie</h3>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MovieItem;
