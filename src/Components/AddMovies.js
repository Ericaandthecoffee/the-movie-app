import { useState } from "react";

function AddMovie({ onAddMovie }) {
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [posterURL, setPosterURL] = useState("");
 const [rating, setRating] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
        title,
        description,
        posterURL,
        rating: Number(rating)
    };

    onAddMovie(newMovie);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
};
    return (
         <div className="add-movie">
            <h1>THE MOVIE STOP</h1>
            <h2>Add a Movie</h2>

           <form className="movie-form" onSubmit={handleSubmit}>
   <input
    type="text"
    placeholder="Movie title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
/>

    <input
    type="text"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
/>
<input
    type="text"
    placeholder="posterURL"
    value={posterURL}
    onChange={(e) => setPosterURL(e.target.value)}
/>
<input
    type="number"
    placeholder="Rating"
    value={rating}
    onChange={(e) => setRating(e.target.value)}
/>

    <button type="submit">Add Movie</button>
</form>
       </div>
    );
}

export default AddMovie;