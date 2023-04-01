import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignIn.scss";
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("https://netflix-clone-backend-plum.vercel.app/api/auth/login", credential)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
        setCredential(res.data);
        navigate("/series");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="signin">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or Phone Number"
            value={credential.email}
            name={"email"}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={credential.password}
            name={"password"}
            onChange={handleChange}
          />
          <button className="signinButton" onClick={handleClick}>
            Sign In
          </button>
          <span>
            New to Netflix? <b onClick={handleSignup}>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
