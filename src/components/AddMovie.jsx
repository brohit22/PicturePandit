import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/action.js';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      releaseYear,
      genre,
    };
    dispatch(addMovie(newMovie));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type='text'
        placeholder='Release Year'
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <input
        type='text'
        placeholder='Genre'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type='submit'>Add Movie</button>
    </form>
  );
};

export default AddMovie;
