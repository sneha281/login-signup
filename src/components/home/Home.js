import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage" style={{ hieght: "100vh", width: "100vw" }}>
      <h1>hello homepage me</h1>
      <div className="button">button</div>
      <div
        onClick={() => {
          navigate("sign");
        }}
        className="button"
      >
        Sign in
      </div>
    </div>
  );
};

export default Home;
