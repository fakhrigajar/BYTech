import React from 'react';
import './css/Footer.css';
import 'remixicon/fonts/remixicon.css';

function Footer() {
 return (
  <footer className='container-fluid bg-dark text-white py-5 d-flex flex-column gap-5'>

   <div className='text-center px-3'>
    <h1 className='fw-bold fs-1'>Əlaqə məlumatları</h1>
    <p className='fs-5 mx-auto text1'>
     Xidmətimizin gündəlik iş qrafiki bazar ertəsindən cümə gününədək saat 9:00-dan 18:00-dəkdir, GMT+4.
     Genişləndirilmiş iş saatlarından bizim Premium müştərilərimiz faydalana bilər.
    </p>
   </div>

   <div className='d-flex flex-wrap justify-content-around align-items-start gap-4'>

    <div className='d-flex flex-column align-items-center gap-3'>
     <div className='rounded-circle d-flex align-items-center justify-content-center bg-primary icon-container'>
      <i className="ri-map-pin-line fs-2"></i>
     </div>
     <h3 className='fs-4 fw-bold'>Ünvan</h3>
     <p className='fs-5 text-center'>Bülbül Pr42, Jale Plaza, 5-ci mərtəbə</p>
    </div>

    <div className='d-flex flex-column align-items-center gap-3'>
     <div className='rounded-circle d-flex align-items-center justify-content-center bg-primary icon-container'>
      <i className="ri-phone-line fs-2"></i>
     </div>
     <h3 className='fs-4 fw-bold'>Telefonlar</h3>
     <p className='fs-5 text-center'>010 529 18 29</p>
    </div>

    <div className='d-flex flex-column align-items-center gap-3'>
     <div className='rounded-circle d-flex align-items-center justify-content-center bg-primary icon-container'>
      <i className="ri-mail-line fs-2"></i>
     </div>
     <h3 className='fs-4 fw-bold'>E-mail</h3>
     <p className='fs-5 text-center'>info@bytech.az</p>
    </div>

   </div>

  </footer>
 );
}

export default Footer;
