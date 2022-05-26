import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard.jsx";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    get("/discover/movie")
    /* fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer <<Token>>",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json()) */
      .then((data) => {
        setMovies(data.results);
      });
    }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
