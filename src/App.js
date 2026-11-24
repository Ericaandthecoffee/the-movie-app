
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import AddMovies from "./Components/AddMovies";
import "./App.css";

function App() {
  const [movies, setMovies] = useState
 ([

    {
      title: "Inception",
      description: "A thief enters people's dreams.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8
    },
    {
      title: "Interstellar",
      description:
        "A team travels through a wormhole to find a new home for humanity.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      rating: 8.7
    }
  ]);

   const [searchTitle, setSearchTitle] = useState("");

const [rating, setRating] = useState(0);

const handleAddMovie = (newMovie) => {
    setMovies((previousMovies) => [...previousMovies, newMovie]);
};

const filteredMovies = movies.filter((movie) => {
    return (
        movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        movie.rating >= rating
    );
});



  return (
    <div className="app-container">
      <AddMovies onAddMovie={handleAddMovie} />
        <Filter
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            rating={rating}
            setRating={setRating}
        />

       <MovieList movies={filteredMovies} />
    </div>
);
}

export default App;

