import React from 'react'
import './css/HeroSections.css'
import BackgroundImage from '../assets/teamfoto.webp';

function HeroSections() {
 return (
  <>
   <div
    className="d-flex align-items-center w-100"
    style={{
     backgroundImage: `url(${BackgroundImage})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
    }}
   >
    <div className="container">
     <div className="row align-items-center">
      <div className="col-12 col-lg-6">
       <div className="text-white p-3 bg-opacity-50 rounded d-flex flex-column gap-3">
        <h1 className="display-4 fw-bold">SİZİN ETİBAR EDƏ BİLƏCƏYİNİZ İT KOMANDASI</h1>
        <p className="fs-5">
         Biz Sizin biznes prosseslərinizin məhsuldarlığını yüksəldəcək xidmətlər təklif edirik.
        </p>
        <p className="fs-5">
         İcazə verin Sizə səmərəli işləməyin yollarını göstərək.
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default HeroSections