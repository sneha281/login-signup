import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios"
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

const login = () =>{
  axios.post("http://localhost:9002/login", user)
  .then(res => console.log(res))
}
  return (
    <div className="login">
      <h1>login</h1>
       {console.log("User", user)}
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
      <div className="button" onClick ={login}>
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
