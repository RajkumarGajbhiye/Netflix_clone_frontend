import React, { useState, useEffect } from "react";
import "../css/Navbar.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from "axios";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputBox,setInputBox] = useState("")
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleSeries = () => {
    navigate("/series");
  };

  const handleLogout = () => {
    localStorage.clear("token");
    navigate("/signin");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      navigate("/signup");
    }
  }, []);

   
  const handleclick=()=>{
   axios.get(`https://netflix-clone-backend-plum.vercel.app/api/movie/search/${inputBox}`).then(res=>{
    console.log(res)
    setInputBox(res.data)
   }).catch(err=>{
    console.log(err)
   })
    
  }

  const handleChange=(e)=>{
    setInputBox(e.target.value)
  }


  return (
    <div className={isScrolled ? "nav scrolled" : "nav"}>
      <div className="container">
        <div className="left">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <span className="navbarmainLink" onClick={handleSeries}>
            Series
          </span>
        </div>
       
        <div className="right">
        <div className="input-wrapper">
          <SearchOutlinedIcon className="Searchicon" onClick={handleclick}/>
          <input type="text" placeholder="Enter Movie Name..." value={inputBox} onChange={handleChange}/>
          </div>
          <img
            className="image"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
