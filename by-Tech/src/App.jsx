import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Zero from './components/Zero';
import HeroSections from './components/HeroSections';
import Services from './components/Services';
import ScrollTopButton from './components/ScrollTopButton';
import Social from './components/Social';
import Preference from './components/Preference';
import SwiperComponent from './components/SwiperComponent';
import Offer from './components/Offer';
import CommentSwiper from './components/CommentSwiper';
import Team from './components/Team';
import 'remixicon/fonts/remixicon.css';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSections />
      <SwiperComponent />
      <Zero />
      <Services />
      <ScrollTopButton />
      <Social />
      <Preference />
      <Offer />
      <CommentSwiper />
      <Team />
    </>
  )
}

export default App