import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './App.css';
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
import Advertising from './components/Advertising';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "AZ";
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <>
      <Header language={language} setLanguage={changeLanguage} />
      <HeroSections language={language} />
      <SwiperComponent />
      <Zero language={language} />
      <Services language={language} />
      <ScrollTopButton />
      <Social />
      <Preference language={language} />
      <Offer language={language} />
      <CommentSwiper language={language} />
      <Team language={language} />
      <Advertising language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;