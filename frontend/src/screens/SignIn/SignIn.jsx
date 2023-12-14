import React from 'react'
import './signin.css'
const SignIn = () => {
  return (
    <div className='flex mx-auto'>
    <div className='flex mx-auto'>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text m-5 flex">
            Log-In
          </h1>
          <div className="gpt3__header-content__input container flex-col">
            <input type="text" placeholder="Enter PRN" className='m-2' />
            <input type="password" placeholder="Enter Password" className='m-2' />
            <button type="button" className='m-2'>Login</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn
