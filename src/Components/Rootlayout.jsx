import React, { useState } from 'react'
import Navbar from './Navbar'
import Announcement_Header from './Announcement_Header'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Footer from './footer'

export default function Rootlayout() {
    var [Announce,setAnnounce]=useState(true)

  return (
    <div>
       {
        Announce?    
         <Announcement_Header setAnnounce={setAnnounce} />
        :''
      }
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}
