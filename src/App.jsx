import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useParams, Outlet, useNavigate } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails"; // Import your MovieDetails component
import SearchIcon from "./assets/search.svg";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey={yourKey}&s=${searchTerm}`
      );
      const data = await response.json();

      setMovies(data.Search);
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <Router>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => setSearchTerm("")}
          />
        </div>

        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetailsWrapper movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

function MovieList({ movies }) {
  return (
    <div className="container">
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <MovieCard movie={movie} />
          </Link>
        ))
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

function MovieDetailsWrapper({ movies }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = movies.find((movie) => movie.imdbID === id);

  if (movie) {
    return <MovieDetails movie={movie} />;
  } else {
    navigate("/", { replace: true });
    return null;
  }
}

export default App;