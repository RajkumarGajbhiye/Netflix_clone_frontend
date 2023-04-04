import React, { useEffect, useState } from "react";
import "../css/Featured.scss";
import axios from "axios";

const Featured = () => {
  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(
          `https://netflix-clone-backend-plum.vercel.app/api/movie/random`
        );
        console.log(res);
        setRandomMovie(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomMovie();
  }, []);

  return (
    <div className="featured">
      <img src={randomMovie.imageBackground} alt="" />
      <div className="info">
        <img src={randomMovie.imageTitle} alt="" />
        <span className="des">{randomMovie.description}</span>
      </div>
    </div>
  );
};

export default Featured;
