import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../redux/action.js';

const EditMovie = ({ match }) => {
  const movieId = match.params.id;
  const movie = useSelector((state) =>
    state.movies.find((m) => m.id === parseInt(movieId))
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editMovie({
        id: movie.id,
        title,
        description,
        releaseYear,
        genre,
      })
    );
  };

  if (!movie) return <div>Movie not found</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Movie</h2>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
      />
      <input
        type='number'
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        placeholder='Release Year'
      />
      <input
        type='text'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder='Genre'
      />
      <button type='submit'>Save Changes</button>
    </form>
  );
};

export default EditMovie;
