import { useParams } from "react-router-dom";

function MovieDetails ({movies}){
    const { id } =useParams();
    const movie = movies.find((movie) => movie.id === id);
    if (!movie){
        return <h2>Movie not found</h2>
    } else {
        return(
            <div>
                 <h1>{movie.title}</h1>
            <img src={movie.posterURL} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>

            </div>
        )
    }
  

}

export default MovieDetails;