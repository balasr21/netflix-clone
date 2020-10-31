import React, { useState } from "react";
import "./MoviePoster.styles.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

const MoviePoster = ({ moviePath, movieName, isLarge }) => {
  const [trailerId, setTrailerId] = useState("");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function toggleTrailer(movieName) {
    console.log("Toggle trailer " + movieName);
    if (trailerId) {
      console.log("True");
      setTrailerId("");
    } else {
      movieTrailer(movieName)
        .then((url) => {
          const urlParms = new URLSearchParams(new URL(url).search);
          setTrailerId(urlParms.get("v"));
        })
        .catch((err) => {
          setTrailerId("");
          console.log(err);
        });
    }
  }

  return (
    <React.Fragment>
      <img
        onClick={() => toggleTrailer(movieName)}
        className={`movie-poster ${isLarge && "movie-poster-large"}`}
        src={`${baseURL}${moviePath}`}
        alt={movieName || "MovieName"}
      />

      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </React.Fragment>
  );
};

export default MoviePoster;
