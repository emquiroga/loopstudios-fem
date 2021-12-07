import React from 'react'
import './App.scss' 
import Creations from './components/Creations'
import Footer from './components/Footer'
import Header from './components/Header'
import VRSection from './components/VRSection'

const App = () => {
  return (
   <>
    <Header />
    <VRSection />
    <Creations />
    <Footer />
  </>
  )
}

export default App
