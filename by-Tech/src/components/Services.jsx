import React from 'react'
import İmage1 from "../assets/HostingEmail.webp"
import İmage2 from "../assets/kameralar.jpg"
import İmage3 from "../assets/sebeke.webp"
import İmage4 from "../assets/cloud.webp"
import İmage5 from "../assets/website.jpg"
import İmage6 from "../assets/app.webp"
import İmage7 from "../assets/Qrafik.jpg"
import İmage8 from "../assets/uxdizayner.jpg"
import './css/Services.css'

function Services() {
 return (
  <>
<div className="container-fluid py-5 services-container">
    <h2 className="text-center mb-5 text-white fs-1">Xidmətlər</h2>
    <div className="row g-4 flex-wrap">
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage1})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Hosting və E-poçt dəsdəyi</h1>
      </div>
     </div>
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage2})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Təhlükəsizlik kameraları</h1>
      </div>
     </div>
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage3})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Şəbəkə Xidməti</h1>
      </div>
     </div>
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage4})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Cloud Server</h1>
      </div>
     </div>

     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage5})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Web Saytların hazırlanması</h1>
      </div>
     </div>
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage6})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Tətbiqlərin Hazırlanması</h1>
      </div>
     </div>
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage7})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>Qrafik Dizayner</h1>
      </div>
     </div>
     <div className="col-md-3 col-sm-6">
      <div className="service-box rounded-3 d-flex align-items-center justify-content-center text-center text-white"
       style={{
        backgroundImage: `url(${İmage8})`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }}>
       <h1 className='fs-4 fw-bold bg-black p-2 rounded-3'>UX/UI Dizayner</h1>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default Services