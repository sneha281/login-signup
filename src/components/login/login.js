import React , {useState}from 'react'
import './login.css'

const login = () => {

    const [user , setUser] = useState({

      
        email : "",
        password : ""    
    })


    const handleChange  = e =>{
      const {name , value} = e.target
      
      setUser({
        ...user,
        [name]: value
      })
    }

   
  return (
    <div className="login">
      {console.log(user)}
        <h1>login</h1>
        <input type = "text" name = "email"value = {user.email} onChange = {handleChange}placeholder="Enter your Email" ></input>
        <input type = "password" name="password" value={user.password} onChnange = {handleChange}placeholder = "Enter your Password" ></input>
        <div className="button">login</div>
    <div>or</div>
    <div className = "button">Register</div>        
      
    </div>
  )
}

export default login
