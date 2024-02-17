import React from 'react'
import Footer from './component/Footer'
import { Navbar } from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:title' element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App