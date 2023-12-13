import React from 'react'
import './signin.css'
const SignIn = () => {
  return (
    <div className='flex'>
        <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">
              Log-In
            </h1>
            <div className="gpt3__header-content__input container">
              <input type="text" placeholder="Enter PRN" />
              <button type="button">Login</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignIn
