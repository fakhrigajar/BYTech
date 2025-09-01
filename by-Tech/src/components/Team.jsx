import React from 'react'
import './css/Team.css';
import img4 from "../assets/women foto.avif"
import img3 from "../assets/manfoto.webp"
import img2 from "../assets/asgarov.jpg"

function Team() {
 return (
  <>
   <div className='container-fluid box mt-5 p-5'>
    <h1 className='text-white text-center fs-2'>Komandamız</h1>
    <div className='d-flex gap-5 justify-between mt-5 box-card-container'>

     <div className='bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow'>
      <div className='rounded-circle'>
       <img className='w-100 h-100 rounded-circle' src={img2} alt="" />
      </div>
      <h1 className='fs-4 fw-bold'>Rashad Shrınov</h1>
      <p className='fs-5 fw-bold'>Ceo</p>
     </div>

     <div className='bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow'>
      <div className='rounded-circle'>
       <img className='w-100 h-100 rounded-circle' src={img2} alt="" />
      </div>
      <h1 className='fs-4 fw-bold'>Elvin Asgarov</h1>
      <p className='fs-5 fw-bold'>Developer</p>
     </div>

     <div className='bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow'>
      <div className='rounded-circle'>
       <img className='w-100 h-100 rounded-circle' src={img3} alt="" />
      </div>
      <h1 className='fs-4 fw-bold'>Mike Johnson</h1>
      <p className='fs-5 fw-bold'>Technical Lead</p>
     </div>

     <div className='bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow'>
      <div className='rounded-circle'>
       <img className='w-100 h-100 rounded-circle' src={img4} alt="" />
      </div>
      <h1 className='fs-4 fw-bold'>Sarah Wilson</h1>
      <p className='fs-5 fw-bold'>Designer</p>
     </div>
    </div>
   </div>
  </>
 )
}

export default Team