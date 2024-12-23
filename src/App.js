import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [search, setSearch] = useState("Spiderman");
  const [searchname, setSearchname] = useState("");
  const [movies, setMovies] = useState([]);

  const searchHandle = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchHandle(search);
  }, [searchname]);

  function searchName(e) {
    setSearch(e.target.value);
  }

  function searchActivate() {
    if (search == "") {
      setSearch("Spiderman");
    }
    setSearchname(search);
  }
  return (
    <>
      <div className="app">
        <h1>Movie App</h1>
        <div className="search">
          <input type="text" value={search} onChange={searchName} />
          <img src={searchIcon} alt="search" onClick={searchActivate} />
        </div>
        <div className="empty">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
