import React, { useState, useEffect } from "react";
import "../css/Navbar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <img
            className="image"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />

          <div className="profile">
            <LogoutIcon className="icon" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
