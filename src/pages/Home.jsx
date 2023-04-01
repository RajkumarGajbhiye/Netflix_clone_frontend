import React, { useEffect, useState } from "react";
import "../css/Home.scss";
import axios from "axios";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from "../components/List";
import { useNavigate } from "react-router-dom";

const Home = ({ type }) => {
  const navigate = useNavigate();
  useEffect(()=>{
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
    }

  },[])


  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  
  useEffect(() => {

    
    const getRandomLists = async () => {
      try {
        let authToken = localStorage.getItem("token");
        const res = await axios.get(
          `https://netflix-clone-backend-plum.vercel.app/api/list/getalllist${
            type ? "?type" + type : ""
          }${genre ? "genre=" + genre : ""}`,
          {
            headers: {
              authorization: `Bearer${authToken}`,
            },
          }
        );
        console.log(res.data.list);
        setLists(res.data.list);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
