import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbars from '../Navbar'

export default function Layout() {
  return (
    <div>
      <Navbars/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
