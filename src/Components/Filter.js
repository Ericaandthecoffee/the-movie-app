

function Filter({searchTitle, setSearchTitle,rating, setRating}) {

    

   return (
    <div className="filter-container">
        <input className="search-input"
            type="text"
            placeholder="Search movies..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
        />

        <select className="rating-select"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
        >
            <option value="0">All ratings</option>
            <option value="7">7 and above</option>
            <option value="8">8 and above</option>
            <option value="9">9 and above</option>
        </select>
    </div>
);
}

export default Filter;