import React from 'react'
import Navbar from './Components/Navbar1/Navbar'
import Navbar2 from './Components/Navbar2/Navbar2'
import Home from './Components/Home/Home'
import CardSection from './Components/Card/CardSection'
import AllProduct from './Components/AllProduct/AllProduct'
import Footer from './Components/Footer/Footer'
import Theme from './Components/Theme/Theme'
import Card2 from './Components/Card2/Card2'

function MainPage() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Home />
      <CardSection />
      <AllProduct />
      <Card2 />
      <Footer />
      <Theme />
    </>
  )
}

export default MainPage