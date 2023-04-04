import React, { useEffect, useState } from "react";
import "../css/Watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Watch = () => {
  const { _id } = useParams();

  const [movievideo, setMovieVideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://netflix-clone-backend-plum.vercel.app/api/movie/singlefind/${_id}`
      )
      .then((res) => {
        console.log(res.data);
        setMovieVideo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="watch">
      <Link to="/series">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <iframe
        src={movievideo.video}
        className="video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
