import React from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Router from './routes/MainRoutes'


export default () => {
  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}
