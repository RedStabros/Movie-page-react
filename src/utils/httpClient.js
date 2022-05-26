const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGJmOTY4NTYwMTUwMWFjODU0MjEwNGI1YThmM2FhMCIsInN1YiI6IjYyOGMzOTMxNmM4NDkyNzE4N2FlMTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wW1QPMuzjYiQKy5KBJeyrCfd5WhS7fbvn-Xr5tf-AG4",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
