// src/redux/reducer.js

import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  TOGGLE_WATCHED,
  RATE_MOVIE,
  REVIEW_MOVIE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from './action.js';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case TOGGLE_WATCHED:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, watched: !movie.watched }
            : movie
        ),
      };
    case RATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, rating: action.payload.rating }
            : movie
        ),
      };
    case REVIEW_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, review: action.payload.review }
            : movie
        ),
      };
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
