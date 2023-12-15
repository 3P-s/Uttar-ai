import React from 'react'
import { useState } from 'react'
import  Header  from '../containers/header/Header'
import Navbar  from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
    </div>
  )
}

export default Home
