import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
          setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]);
        } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   fetchData();
  }, []);

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
  const title = movie.title || movie.name || movie.original_name;
  const description = truncate(movie.overview, 150);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{title}</h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{description}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
