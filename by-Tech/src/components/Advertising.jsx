import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './css/Advertising.css';
import img1 from "../assets/metro.png"
import img2 from "../assets/azerpoct.png"
import img3 from "../assets/azersun.jpg"
import img4 from "../assets/kapital.jpg"
import img5 from "../assets/nar.jpeg"

function Advertising() {
 return (
  <div>
   <h1 className='text-center fs-2 fw-bold mt-5'>Müştərilərimiz</h1>
   <Swiper
    spaceBetween={30}
    pagination={{ clickable: true }}
    modules={[Pagination, Autoplay]}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    className="advertising-swiper mt-5 pt-5"
    breakpoints={{
     0: { slidesPerView: 1 },
     600: { slidesPerView: 2 },
     768: { slidesPerView: 3 }
    }}
   >
    <SwiperSlide className="advertising-slide"><img src={img1} alt="" /></SwiperSlide>
    <SwiperSlide className="advertising-slide"><img src={img2} alt="" /></SwiperSlide>
    <SwiperSlide className="advertising-slide"><img src={img3} alt="" /></SwiperSlide>
    <SwiperSlide className="advertising-slide"><img src={img4} alt="" /></SwiperSlide>
    <SwiperSlide className="advertising-slide"><img src={img5} alt="" /></SwiperSlide>
    <SwiperSlide className="advertising-slide"><img src={img1} alt="" /></SwiperSlide>
    <SwiperSlide className="advertising-slide"><img src={img2} alt="" /></SwiperSlide>
   </Swiper>
  </div>
 );
}

export default Advertising;