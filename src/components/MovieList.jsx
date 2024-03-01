// src/components/MovieList.jsx

import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";


function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [firstLetter, setFirstLetter] = useState("");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
  };

  const addNewMovie = (newMovie) => {
    let newMovies = [newMovie, ...movies]
    setMovies(newMovies)
  }

  let filtered = firstLetter ? movies.filter((movie) => movie.title[0].toLowerCase() === firstLetter.toLowerCase()) : movies
  
  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie addNewMovie={addNewMovie} />
      <FilterMovies handleSelect={handleSelect} firstLetter={firstLetter}  />
      {filtered.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
