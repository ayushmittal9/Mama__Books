import React from 'react'
import Navbar from './Components/Navbar1/Navbar'
import Navbar2 from './Components/Navbar2/Navbar2'
import Home from './Components/Home/Home'
import CardSection from './Components/Card/CardSection'
import AllProduct from './Components/AllProduct/AllProduct'

function MainPage() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Home />
      <CardSection />
      <AllProduct />
    </>
  )
}

export default MainPage