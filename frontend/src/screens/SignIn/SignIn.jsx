import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signin.css'
const SignIn = () => {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch("http://localhost:8080/users/login", {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ email: username, password: password })
      });
      const json = await res.json();
      console.log(json.message);
      if (!json) {
        alert("Enter Valid Creds")
      }
      if (json.message) {
        localStorage.setItem("authToken", json.token);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } 

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex mx-auto'>
        <div className='flex mx-auto'>
          <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
              <h1 className="gradient__text m-5 flex">
                Log-In
              </h1>
              <div className="gpt3__header-content__input container flex-col">
                <input type="text" placeholder="Enter Email" className='m-2' value={username} onChange={handleUsernameChange} />
                <input type="password" placeholder="Enter Password" className='m-2' value={password} onChange={handlePasswordChange}/>
                <button type="submit" className='m-2'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignIn
