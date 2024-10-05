``;
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=826dc2cd";

function App() {
  const [search, setSearch] = useState("Spiderman");
  const [searchname, setSearchname] = useState("");
  const [movies, setMovies] = useState([]);

  const searchHandle = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
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
