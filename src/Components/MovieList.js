
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
       <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.title}
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    posterURL={movie.posterURL}
                    rating={movie.rating}
                    trailerURL={movie.trailerURL}
                />
            ))}
        </div>
    );
}

export default MovieList;
