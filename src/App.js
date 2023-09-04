/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// API KEY 5e69936c
const API_URL = 'https://www.omdbapi.com?apikey=841f14f2';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies('');
  }, []);
  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <img
          src={SearchIcon}
          alt="Search.."
          onClick={() => searchMovies(searchTerm)}

        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found.</h2>
            </div>
          )

      }

    </div>
  );
}

export default App;
