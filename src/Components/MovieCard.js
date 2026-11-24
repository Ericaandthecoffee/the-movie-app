
function MovieCard({ title, description, posterURL, rating }) {
    return (
        <div className="movie-card">
            <h1>{title}</h1>
            <p>{description}</p>
            <img className="movie-poster" src={posterURL} alt={title} />
            <p>{rating}</p>
        </div>
    );
}

export default MovieCard;
