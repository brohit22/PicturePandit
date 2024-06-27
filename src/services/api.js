// src/services/api.js
import axios from 'axios';

const API_URL = 'https://imdb-top-100-movies.p.rapidapi.com/'; // Change this to your API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': '285e22e2cdmsh2a9684e3a1f9d7ep12fb84jsnc7c2e8400704',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
  },
});

// Get all movies
export const getMovies = async () => {
  const response = await axiosInstance.get('/');
  return response.data;
};

// Add a new movie
export const addMovie = async (movie) => {
  const response = await axiosInstance.post('/', movie);
  return response.data;
};

// Edit an existing movie
export const editMovie = async (id, updatedMovie) => {
  const response = await axiosInstance.put(`/${id}`, updatedMovie);
  return response.data;
};

// Delete a movie
export const deleteMovie = async (id) => {
  const response = await axiosInstance.delete(`/${id}`);
  return response.data;
};
