// src/components/AddMovie.jsx

import { useState } from "react";

function AddMovie({ addNewMovie }) {

  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    IMDBRating: 5,
    hasOscars: true
  })

  const handleTextChange = (e) => {
    setNewMovie((prev) => ({...prev, [e.target.name]: e.target.value})) 
  }

  const handleNumberChange = (e) => {
    setNewMovie((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
  }

  const handleCheckChange = (e) => {
    setNewMovie((prev) => ({...prev, [e.target.name]: e.target.checked}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addNewMovie(newMovie)

    console.log("new movie ====>", newMovie)

    setNewMovie({
        title: "",
        director: "",
        IMDBRating: 5,
        hasOscars: true
      })

  }  

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={newMovie.title}
            onChange={handleTextChange}
        />
        
  
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={newMovie.director} 
            onChange={handleTextChange}
        />
  
        <label>IMDB Rating: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={newMovie.IMDBRating} 
            onChange={handleNumberChange}
        />
  
        <label>Won Oscars: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={newMovie.hasOscars} 
            onChange={handleCheckChange}
        />
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
