
const MovieDetails = ({ movie: { imdbID, Year, Poster, Title, Type, Released, imdbRating } }) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
                <span> {Released}</span>
                <span>{imdbRating}</span>
            </div>
        </div>
    )
}

export default MovieDetails