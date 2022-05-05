import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handlelogin = () => {
    console.log(user);
  };

  return (
    <div className="login">
      <h1>login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChnange={(e) => {
          handleChange(e);
        }}
        placeholder="Enter your Password"
      ></input>
      <div onClick={() => handlelogin()} className="button">
        login
      </div>
      <div>or</div>
      <div
        onClick={() => {
          navigate("/sign");
        }}
        className="button"
      >
        Register
      </div>
    </div>
  );
};

export default Login;
