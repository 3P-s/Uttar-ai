import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch("http://10.10.16.13:8080/users/signup", {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ email: username, password: password, name: name })
      });
      const json = await res.json();
      console.log(json);
      if (!json) {
        alert("Enter Valid Creds")
      }
      if (json.success) {
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"));
      }
    } 

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
    const handleNameChange = (event) => {
      setName(event.target.value);
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
                SignUp
              </h1>
              <div className="gpt3__header-content__input container flex-col">
                <input type="text" placeholder="Name" className='m-2' value={name} onChange={handleNameChange} />
                <input type="text" placeholder="Email" className='m-2' value={username} onChange={handleUsernameChange} />
                <input type="password" placeholder="Enter Password" className='m-2' value={password} onChange={handlePasswordChange}/>
                <button type="submit" className='m-2'>SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )

}

export default SignUp
