import React from 'react'
import './App.scss' 
import Creations from './components/Creations'
import Header from './components/Header'
import VRSection from './components/VRSection'

const App = () => {
  return (
   <>
    <Header />
    <VRSection />
    <Creations />
    </>
  )
}

export default App
