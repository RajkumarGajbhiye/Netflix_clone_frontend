import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import "../css/SignUp.scss";
import axios from "axios";

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      const res = await axios.post(
        "https://netflix-clone-backend-plum.vercel.app/api/auth/signup",
        state
      );
      console.log(res);
      setState(res.data);
    } catch (err) {
      console.log(err);
    }
    navigate("/signin");
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const redidectsignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="signup">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton" onClick={redidectsignIn}>
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="email address"
              value={state.email}
              name={"email"}
              onChange={handleChange}
              ref={emailRef}
            />
            <button className="signupButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              value={state.username}
              name={"username"}
              onChange={handleChange}
              ref={usernameRef}
            />
            <input
              type="password"
              placeholder="password"
              value={state.password}
              name={"password"}
              onChange={handleChange}
              ref={passwordRef}
            />
            <button className="signupButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
