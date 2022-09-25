import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";

const Register = () => {
  const[username,setUsername] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState(false);

  const handleSubmit= async (e) =>{
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register",{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch(err) {
      setError(true);
    }
    
  
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="registerLabel">Username</label>
        <input 
        className="registerInput" 
        type="text" 
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
         />
        <label className="registerLabel">Email</label>
        <input 
        className="registerInput" 
        type="text" 
        placeholder="Enter your email..." 
        onChange={(e) => setEmail(e.target.value)}
        />
        <label className="registerLabel">Password</label>
        <input 
        className="registerInput" 
        type="password" 
        placeholder="Enter your password..."
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className= "link" to ="/login">Login</Link>
      </button>
      {error && <span style={{color:"red",marginTop:"10px"}}>something went wrong!</span>}
    </div>
  )
}

export default Register
