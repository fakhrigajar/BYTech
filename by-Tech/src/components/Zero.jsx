import React from 'react'
import Zeroimg from "../assets/mainfoto.png"
import './css/Zero.css'

function Zero() {
 return (
  <>
   <div className="container-box container-fluid py-6">
    <div className="row align-items-center min-vh-100">
     <div className="col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center text-md-start text-center mb-4 mb-md-0 p-md-4">
      <h1 className="text-h display-4 fw-bold">BYTech</h1>
      <h4 className="mt-3 fw-bold text-h">Dəstək və Həllər</h4>
      <p className="text-p mt-3 w-75 fs-5 fw-semibold">
       ByTech Şirkətinin məqsədi uzun müddət beynəlxalq standartlara əsaslanan, stabil və peşəkar fəaliyyəti nəticəsində əldə etdiyi müştəri etibarını qoruyub saxlamaq, müştərilərə əməkdaşlar tərəfindən peşəkar xidmətin göstərilməsi, son texnoloji nailiyyətlər əsasında qurulan avadanlıqların və həllərin təklifi, etibarlı satış və servis xidmətləri göstərməkdir.
      </p>
      <button className="btn btn-primary mt-3 fs-5">Ətraflı</button>
     </div>
     <div className="col-md-5 text-center">
      <img src={Zeroimg} alt="Zero" className="img-fluid col-md-12" />
     </div>
    </div>
   </div>
  </>
 )
}

export default Zero