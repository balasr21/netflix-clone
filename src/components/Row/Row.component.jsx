import React, { useState, useEffect } from "react";
import axois from "../../api/axios";
import MoviePoster from "../MoviePoster/MoviePoster.component";
import "./Row.styles.css";

const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axois.get(fetchURL);

      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2 className="movie__name">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <MoviePoster
            key={movie.id}
            moviePath={isLarge ? movie.poster_path : movie.backdrop_path}
            movieName={movie?.name || movie?.original_title}
            isLarge={isLarge}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
