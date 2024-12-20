import React, { useState } from 'react'
import Banner from './Banner'
import Product_Section from './Product_Section'
import Home_sections from './Home_sections'
import Footer_banner from './footer_banner'

export default function Home() {

  return (
    <>
     
      <Banner/>
      <Home_sections title='Big Savings' discount='10' />
      <Home_sections title='Shop by Category' discount='' />
      <Footer_banner/>

    
    </>
  )
}
