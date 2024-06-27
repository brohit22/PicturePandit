import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers.js';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
