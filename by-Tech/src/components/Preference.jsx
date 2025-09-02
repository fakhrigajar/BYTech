import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import './css/Preference.css'

function Preference() {
 const Preference = [
  {
   title: "PERSONALLA BAĞLI HEÇ BİR ÇƏTİNLİK YOXDUR",
   icon: "ri-user-line",
   text: "Personalla əlaqə qurmaq və suallarınıza cavab almaq prosesi sadə və rahatdır."
  },
  {
   title: "MƏLUMATLARINIZ TƏHLÜKƏSİZLİKDƏDİR",
   icon: "ri-folder-line",
   text: "Məlumatlarınız hər zaman onlara ehtiyacınız yarandığı yerdədir."
  },
  {
   title: "ŞƏBƏKƏNİZ QORUNUR",
   icon: "ri-lock-line",
   text: "Şirkətiniz üçün son dərəcə vacib olan məlumatların kimlər üçün əlçatan olduğunu hər zaman bilin."
  },
  {
   title: "ZƏNGİNİZ HƏR ZAMAN QƏBUL EDİLƏCƏK",
   icon: "ri-customer-service-line",
   text: "Peşəkar dəstək komandası harada olmağınızdan asılı olmayaraq, Sizə kömək etməyə hazırdır."
  },
  {
   title: "ARTIQ XƏRCSİZ BÜTÖV BİR İT ŞÖBƏSİ",
   icon: "ri-user-community-line",
   text: "Diqqətinizi biznesinizə yönəldin, İT personalın idarə olunmasına yox."
  },
  {
   title: "HEÇ BİR GİZLİ ÖDƏMƏ YOXDUR",
   icon: "ri-exchange-dollar-line",
   text: "Biz heç zaman sürprizlər etmirik. Hər zaman İT-nizin neçəyə və niyə bu qiymətə olduğunu bilirsiniz."
  },
  {
   title: "KOMANDA İŞİ",
   icon: "ri-24-hours-line",
   text: "Komanda işi sayəsində hər kəsin bacarığı birləşir və daha güclü nəticələr əldə edilir."
  },
  {
   title: "WEB SAYT VƏ APP HAZIRLANMASI",
   icon: "ri-code-line",
   text: "Müasir Veb Saytlar və Mobil Tətbiqlər Hazırlayırıq"
  }
 ]
 return (
  <>
   <div className="preference-box w-100 h-auto d-flex flex-column gap-3 align-items-center">
    {/* Başlıq */}
    <div className="text-center mb-5 d-flex flex-column gap-4">
     <h2 className="text-color">Niyə məhz byTech?</h2>
     <h4 className="text-color">Biz zəmanət veririk.</h4>
    </div>

    {/* Kartlar */}
    <div className="container">
     <div className="row justify-content-center">
      {Preference.map((preference, index) => (
       <div
        key={index}
        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
       >
        <div className="card text-center w-100 card-box-container d-flex flex-column justify-content-between gap-3">
         <i className={`${preference.icon} image-color mb-3 fs-2`} />
         <h1 className="fs-5 image-color">{preference.title}</h1>
         <p className="fs-5 image-color">{preference.text}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 )
}

export default Preference