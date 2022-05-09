import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./sign.css";
const Sign = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const register = () => {
    const {name , email,password , reEnterPassword} = user
    if(name && email && password && (password===reEnterPassword)){
         
    axios.post("http://localhost:9002/sign", user)
      .then(res => console.log)
    }  else{
      alert("nooop");
    }
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register Yourself</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Enter your Password again"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>

      <div
        onClick={() => {
          navigate("/login");
        }}
        className="button"
      >
        login
      </div>
    </div>
  );
};

export default Sign;
