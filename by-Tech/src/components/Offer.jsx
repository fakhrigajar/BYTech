import React from 'react'
import 'remixicon/fonts/remixicon.css';
import './css/Offer.css'

function Offer() {
 return (
  <div className='container py-5'>
   <div className='text-center mb-5'>
    <h1 className='fw-bold' style={{ color: "#106CEF" }}>Biz sizə nə təklif edirik?</h1>
    <h3 style={{ color: "#106CEF" }}>Bu həqiqətən çox sadədir</h3>
   </div>

   <div className='text-center mb-5'>
    <p className='text-secondary fs-5 fw-bold'>
     Biz sizin İT infrastrukturunuzun iş qabiliyyətini yüksək səviyyədə təmin edirik.
     <span className='fs-4'> HƏR ZAMAN.</span>
    </p>
    <p className='text-secondary fs-5 fw-bold'>
     Məlumatlarınızın qorunub saxlanılmasını təmin edirik.
     <span className='fs-4'> DAİMA.</span>
    </p>
    <p className='text-secondary fs-5 fw-bold'>
     Məlumatlarınızın təhlükəsizliyini təmin edirik.
     <span className='fs-4'> HƏQİQƏTƏN.</span>
    </p>
    <p className='text-secondary fs-5 fw-bold'>
     Sizə lazım olan dəstək və köməyi göstəririk.
     <span className='fs-4'> HƏR YERDƏ HƏR ZAMAN.</span>
    </p>
   </div>

   <div className='row text-center g-4'>
    <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
     <i className="ri-medal-line fs-1 fw-bold mb-2" style={{ color: "#106CEF" }}></i>
     <h5 className='fw-bold mb-2' style={{ color: "#106CEF" }}>15 il bazarda</h5>
     <p className='fs-6' style={{ maxWidth: '300px' }}>Müxtəlif biznes mühitlərində zəngin təcrübəyə malik BYTech Sizin etibarlı İT partnyorunuza çevriləcək.</p>
    </div>

    <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
     <i className="ri-lightbulb-flash-line fs-1 fw-bold mb-2" style={{ color: "#106CEF" }}></i>
     <h5 className='fw-bold mb-2' style={{ color: "#106CEF" }}>Daxili IT şöbəsindən daha ucuz</h5>
     <p className='fs-6' style={{ maxWidth: '300px' }}>Sizə şəxsi İT mütəxəssisinizdən də ucuz xidmət göstərəcək peşəkar İT komandası.</p>
    </div>

    <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
     <i className="ri-group-3-fill fs-1 fw-bold mb-2" style={{ color: "#106CEF" }}></i>
     <h5 className='fw-bold mb-2' style={{ color: "#106CEF" }}>Sertifikatlaşdırılmış mütəxəssislər komandası</h5>
     <p className='fs-6' style={{ maxWidth: '400px' }}>İstənilən İT problemin həllində kömək etməyə hazır olan yüksək ixtisaslı və sertifikatlaşdırılmış mütəxəssislərdən ibarət komanda Sizin ixtiyarınızdadır.</p>
    </div>
   </div>
  </div>
 )
}

export default Offer
