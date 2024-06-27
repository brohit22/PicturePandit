// server.js
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 5000;

let movies = []; // This will act as our in-memory database

app.use(cors());
app.use(express.json());

// Get all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Add a new movie
app.post('/movies', (req, res) => {
  const newMovie = { id: uuidv4(), ...req.body };
  movies.push(newMovie);
  res.json(newMovie);
});

// Edit an existing movie
app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const updatedMovie = req.body;
  movies = movies.map((movie) =>
    movie.id === id ? { ...movie, ...updatedMovie } : movie
  );
  res.json(updatedMovie);
});

// Delete a movie
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  movies = movies.filter((movie) => movie.id !== id);
  res.json({ message: 'Movie deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
