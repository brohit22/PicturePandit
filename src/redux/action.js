import axios from 'axios';

// Action Types
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';
export const RATE_MOVIE = 'RATE_MOVIE';
export const REVIEW_MOVIE = 'REVIEW_MOVIE';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

// Action Creators
export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});

export const toggleWatched = (id) => ({
  type: TOGGLE_WATCHED,
  payload: id,
});

export const rateMovie = (id, rating) => ({
  type: RATE_MOVIE,
  payload: { id, rating },
});

export const reviewMovie = (id, review) => ({
  type: REVIEW_MOVIE,
  payload: { id, review },
});

// Async Actions
export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await axios.get('/api/movies');
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

// User Actions
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};
