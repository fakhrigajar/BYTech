import React, { useState, useEffect } from 'react';
import './css/HeroSections.css';
import BackgroundImage from '../assets/teamfoto.webp';

function HeroSections() {
 return (
  <div
   className="d-flex align-items-center w-100"
   style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: "100vh"
   }}
  >
   <div className="container">
    <div className="row align-items-center">
     <div className="col-12 col-lg-6">
      <div className="text-white p-3 pb-5 bg-opacity-50 rounded d-flex flex-column gap-2">
       <h1 className="display-4 fw-bold">
        SİZİN ETİBAR EDƏ BİLƏCƏYİNİZ
        <span className="highlight"> BYTech KOMANDASI</span>
       </h1>
       <p className="fs-4 fw-bold">
        Biz Sizin biznes prosseslərinizin məhsuldarlığını yüksəldəcək xidmətlər
        təklif edirik.
       </p>
       <p className="fs-4 fw-bold">
        İcazə verin Sizə səmərəli işləməyin yollarını göstərək.
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default HeroSections;