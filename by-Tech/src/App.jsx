import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Zero from './components/Zero';
import HeroSections from './components/HeroSections';
import Services from './components/Services';
import ScrollTopButton from './components/ScrollTopButton';
import Social from './components/Social';
import 'remixicon/fonts/remixicon.css';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSections />
      <Zero />
      <Services />
      <ScrollTopButton />
      <Social />
    </>
  )
}

export default App