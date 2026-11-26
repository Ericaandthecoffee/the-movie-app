import { Link } from "react-router-dom";

function MovieCard({ id, title, description, posterURL, rating, trailerURL}) {
    return (
        <div className="movie-card">
            <h1>{title}</h1>
            <p>{description}</p>
            <img className="movie-poster" src={posterURL} alt={title} />
            <p>{rating}</p>
            <Link to={`/movie/${id}`}>
    <button>View Details</button>
            </Link>

            <button onClick ={()=> window.open(trailerURL,"_blank")}>Play Trailer</button>

        </div>
    );
}

export default MovieCard;
