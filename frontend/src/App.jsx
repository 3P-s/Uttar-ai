import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import ChatBot from './screens/ChatBot/ChatBot';
import Home from './screens/Home';
const App = () => (
  <div className="App">
    <div className="gradient__bg">
    <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/chat' element={<ChatBot />} />
          </Routes>
        </div>
    </BrowserRouter>
    </div>
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Footer /> */}
    {/* <SignIn />
    <SignUp/> */}
  </div>
);

export default App;
