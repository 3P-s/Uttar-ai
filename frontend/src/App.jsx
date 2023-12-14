import React from 'react';

import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import ChatBot from './screens/ChatBot/ChatBot';


const App = () => (
  <div className="App">
    {/* <div className="gradient__bg"> 
      <Navbar />
      <Header />
    </div> */}
    {/* <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Footer /> */}
    {/* <SignIn />
    <SignUp/> */}
    <ChatBot/>
  </div>
);

export default App;
