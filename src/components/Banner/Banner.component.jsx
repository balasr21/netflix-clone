import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import endpoints from "../../api/requests";
import "./Banner.styles.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        endpoints.find((endpoint) => (endpoint.category = "Netflix Originals"))
          .url
      );

      // Pick Random movie
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(name, limit) {
    return name?.length > limit ? name.substr(0, limit - 1) + "..." : name;
  }

  const movieURL = `https://image.tmdb.org/t/p/original/${movie?.poster_path}`;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movieURL})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
