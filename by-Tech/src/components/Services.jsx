import React from 'react'
import İmage1 from "../assets/HostingEmail.webp"
import İmage2 from "../assets/kameralar.jpg"
import İmage3 from "../assets/sebeke.webp"
import İmage4 from "../assets/cloud.webp"
import İmage5 from "../assets/website.jpg"
import İmage6 from "../assets/app.webp"
import İmage7 from "../assets/Qrafik.jpg"
import İmage8 from "../assets/uxdizayner.jpg"
import foto1 from "../assets/foto1.svg"
import foto2 from "../assets/foto2.svg"
import foto3 from "../assets/foto3.svg"
import foto4 from "../assets/foto4.svg"
import foto5 from "../assets/foto5.svg"
import foto6 from "../assets/foto6.svg"
import foto7 from "../assets/foto7.svg"
import foto8 from "../assets/foto8.svg"
import foto9 from "../assets/foto9.svg"
import foto10 from "../assets/foto10.svg"
import foto11 from "../assets/foto11.svg"
import foto12 from "../assets/foto12.svg"
import './css/Services.css'

function Services() {
  const SERVICES = [
    {
      title: "Uzaqdan və Lokal dəsdək",
      frontImg: foto1,
      backText: "İşinizin xüsusiyyətini nəzərə alaraq Sizə dəyişdirilməsi mümkün olan xidmət paketi təqdim edirik."
    },
    {
      title: "İstifadəçi və sorğu xidmətinin dəstəyi",
      frontImg: foto2,
      backText: "Soraq xidmətinin ixtisaslaşmış mütəxəssis komandası Biz müştərilərimizin qayğısına qalırıq. Bunu yaxşı etməyin yollarını bilirik."
    },
    {
      title: "24/7 aktiv monitorinq",
      frontImg: foto3,
      backText: "İnfrastrukturun aktiv monitorinqini həyata keçirməklə problemləri yaradan səbəbləri aradan qaldırırıq."
    },
    {
      title: "Cisco mütəxəssis komandası",
      frontImg: foto4,
      backText: "CCİE, CCNP və CCNA sertifikatlı mühəndis komandası rahat işləməyinizə imkan verəcək təhlükəsi və müdafiə olunan şəbəkə infrastrukturu quracaq."
    },
    {
      title: "Telefoniya və səs rabitəsi",
      frontImg: foto5,
      backText: "Korporativ sektor üçün istənilən çətinlikdə, topologiya və miqyasda problemin peşəkar həlli"
    },
    {
      title: "Server infrastrukturu",
      frontImg: foto6,
      backText: "Server infrastrukturunun fəaliyyətini layihələşdirir, inkişaf etdirir, dəstəkləyir, onun xidməti və dəstəklənməsi üçün çəkilən xərcləri optimallaşdırırıq."
    },

    {
      title: "Domein Satışı",
      frontImg: foto7,
      backText: "Biz sizə ən yaxşı və etibarlı domenləri təqdim edirik, biznesinizi rəqəmsal dünyada güclü və görünən etməyə kömək edirik."
    },

    {
      title: "Kibertəhlükəsizlik",
      frontImg: foto9,
      backText: " kompüter sistemləri və şəbəkələrinin məlumatlarını icazəsiz açıqlanma, texniki vasitələrin, proqram təminatının və ya verilənlərin oğurlanması, eləcə də zədələnməsi ilə nəticələ bilən zərərli aktorların hücumlarından qorunur."
    },
    {
      title: "Mobil Tətbiqlərin hazırlanması",
      frontImg: foto8,
      backText: "Peşəkar komandamız sizin üçün iOS və Android tətbiqlərini yüksək performans və unikal dizaynla hazırlayır, biznesinizi mobil dünyada önə çıxarır və rəqiblərinizdən fərqləndirir."
    },
    {
      title: "Web Saytların hazırlanması",
      frontImg: foto10,
      backText: "Peşəkar komandamız sizin üçün müasir, SEO optimizasiya olunmuş və istifadəçi dostu veb saytlar hazırlayır, biznesinizi rəqəmsal dünyada önə çıxarır"
    },
    {
      title: "UX/Uİ Dizayn",
      frontImg: foto11,
      backText: "Peşəkar komandamız sizin üçün intuitiv, cəlbedici və funksional UX/UI dizayn həlləri hazırlayır, istifadəçilərin diqqətini çəkir və biznesinizin rəqəmsal platformalarda uğur qazanmasına dəstək olur."
    },
    {
      title: "Qrafik Dizayn",
      frontImg: foto12,
      backText: "Biz logolardan başlayaraq reklam materiallarına qədər hər bir qrafik elementinizi yüksək keyfiyyət və yaradıcı dizayn prinsipləri ilə təqdim edirik."
    }
  ];

  return (
    <>
      <div className="container-fluid py-5 services-container" id='services'>
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

      <section className="services-wrapper dark-color"
        style={{
          background: "linear-gradient(135deg, #4795A0, #083A5F)"
        }}>
        <div className="container">
          <div className="row justify-content-center">
            {SERVICES.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Ön tərəf */}
                    <div className="flip-card-front">
                      <img className='w-50' src={service.frontImg} alt={service.title} />
                      <h1 className='fs-5 mt-5 fw-bold'>{service.title}</h1>
                    </div>

                    {/* Arxa tərəf */}
                    <div className="flip-card-back">
                      <img className='w-50' src={service.frontImg} alt={service.title} />
                      <h1 className='fs-5 mt-5 fw-bold'>{service.title}</h1>
                      <p>{service.backText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services