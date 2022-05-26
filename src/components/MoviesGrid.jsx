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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGJmOTY4NTYwMTUwMWFjODU0MjEwNGI1YThmM2FhMCIsInN1YiI6IjYyOGMzOTMxNmM4NDkyNzE4N2FlMTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wW1QPMuzjYiQKy5KBJeyrCfd5WhS7fbvn-Xr5tf-AG4",
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
