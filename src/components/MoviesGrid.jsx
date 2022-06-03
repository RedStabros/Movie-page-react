import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard.jsx";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? '/search/movie?query=' + search : '/discover/movie';
    get(searchUrl)
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
        setIsLoading(false);
      });
    }, [search]);

    if (isLoading) {
      return <Spinner />;
    }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
