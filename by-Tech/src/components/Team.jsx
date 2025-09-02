import React from 'react'
import './css/Team.css';
import img4 from "../assets/women foto.avif"
import img3 from "../assets/manfoto.webp"
import img2 from "../assets/asgarov.jpg"

function Team() {
 return (
  <>
   <div className="container-fluid box mt-5 p-5 team-container">
    <h1 className="text-white text-center fs-2">Komandamız</h1>

    <div className="row mt-5 g-4 justify-content-center">
     <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow">
       <div className="rounded-circle overflow-hidden">
        <img className="w-100 h-100 rounded-circle" src={img2} alt="" />
       </div>
       <h1 className="fs-4 fw-bold">Rashad Shrınov</h1>
       <p className="fs-5 fw-bold">Ceo</p>
      </div>
     </div>

     <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow">
       <div className="rounded-circle overflow-hidden">
        <img className="w-100 h-100 rounded-circle" src={img2} alt="" />
       </div>
       <h1 className="fs-4 fw-bold">Elvin Asgarov</h1>
       <p className="fs-5 fw-bold">Developer</p>
      </div>
     </div>

     <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow">
       <div className="rounded-circle overflow-hidden">
        <img className="w-100 h-100 rounded-circle" src={img3} alt="" />
       </div>
       <h1 className="fs-4 fw-bold">Mike Johnson</h1>
       <p className="fs-5 fw-bold">Technical Lead</p>
      </div>
     </div>

     <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="bg-white pt-2 d-flex flex-column align-items-center justify-content-around rounded-3 box-card shadow">
       <div className="rounded-circle overflow-hidden">
        <img className="w-100 h-100 rounded-circle" src={img4} alt="" />
       </div>
       <h1 className="fs-4 fw-bold">Sarah Wilson</h1>
       <p className="fs-5 fw-bold">Designer</p>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default Team
