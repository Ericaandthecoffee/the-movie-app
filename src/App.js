
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import AddMovies from "./Components/AddMovies";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
      id: "inception",
      trailerURL: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
      title: "Interstellar",
      description: "A team travels through a wormhole.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkUqb-86cLqozgook0Yj9QkHHAiSEqNGoHe3CgZYIrjuH8fOVC0kcKexd&s=10",
      rating: 8.7,
      id: "interstellar",
      trailerURL: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= rating
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1>MY MOVIE APP</h1>

            <Filter
              searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
              rating={rating}
              setRating={setRating}
            />

            <AddMovies onAddMovie={handleAddMovie} />

            <MovieList movies={filteredMovies} />
          </div>
        }
      />

      <Route
        path="/movie/:id"
        element={<MovieDetails movies={movies} />}
      />
    </Routes>
  );
}

export default App;

