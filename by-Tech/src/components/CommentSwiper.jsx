import './css/CommentSwiper.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

function CommentSwiper() {
 const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
   return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
 };

 return (
  <div className="container py-5">
   <h1 className="text-center fs-1 mb-4">
    Müştərilərimizin dedikləri...
   </h1>

   <Swiper
    pagination={pagination}
    modules={[Pagination, Autoplay]}
    className="commentSwiper"
    autoplay={{
     delay: 4000,
     disableOnInteraction: false,
    }}
   >
    {/* Slide 1 */}
    <SwiperSlide className="odd p-4 flex-column gap-2">
     <div className="container">
      <div className="row justify-content-center text-center">
       <div className="col-12 col-md-10 col-lg-8">
        <p className="text-white fs-5 fw-bold">
         Bakıda bizim üçün etdiklərinizdən məmnunuq. Başqa ölkələrdə də sizin kimi komandalar tapmaq istərdik.
        </p>
        <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
         <img className="comment-img" src={img1} alt="Ivan Jensen" />
         <div>
          <h3 className="text-white fw-bold mb-0">Ivan Jensen</h3>
          <p className="text-white fw-semibold">International</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide className="even p-4 flex-column gap-2">
     <div className="container">
      <div className="row justify-content-center text-center">
       <div className="col-12 col-md-10 col-lg-8">
        <p className="text-white fs-5 fw-bold">
         Operativ dəstək göstərməyiniz əladır! Köməyinizə görə təşəkkür edirik!
        </p>
        <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
         <img className="comment-img" src={img2} alt="Elur Aliyev" />
         <div>
          <h3 className="text-white fw-bold mb-0">Elur Aliyev</h3>
          <p className="text-white fw-semibold">ASCO</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide className="odd p-4 flex-column gap-2">
     <div className="container">
      <div className="row justify-content-center text-center">
       <div className="col-12 col-md-10 col-lg-8">
        <p className="text-white fs-5 fw-bold">
         BYTech-in təqdim etdiyi xidmətlərdən razıyıq. Komandanız peşəkar İT xidmət göstərməklə yanaşı, həm də xərclərimizə qənaət etməkdə bizə kömək edir.
        </p>
        <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
         <img className="comment-img" src={img3} alt="Orkhan Mammadov" />
         <div>
          <h3 className="text-white fw-bold mb-0">Orkhan Mammadov</h3>
          <p className="text-white fw-semibold">ProlinkCaspian</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </SwiperSlide>

    {/* Slide 4 */}
    <SwiperSlide className="even p-4 flex-column gap-2">
     <div className="container">
      <div className="row justify-content-center text-center">
       <div className="col-12 col-md-10 col-lg-8">
        <p className="text-white fs-5 fw-bold">
         Dəstəyinizə görə təşəkkür edirik! Etibarlı və səmərəli komandadır. Harda oluramsa-olum onlara arxayıman. Əla işdir!
        </p>
        <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
         <img className="comment-img" src={img4} alt="Colin Mackay" />
         <div>
          <h3 className="text-white fw-bold mb-0">Colin Mackay</h3>
          <p className="text-white fw-semibold">LaserGulf</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </SwiperSlide>

    {/* Slide 5 */}
    <SwiperSlide className="odd p-4 flex-column gap-2">
     <div className="container">
      <div className="row justify-content-center text-center">
       <div className="col-12 col-md-10 col-lg-8">
        <p className="text-white fs-5 fw-bold">
         Köməyinizə görə sağ olun! Olduqca peşəkardır. Komandanızı təkidlə hər kəsə tövsiyə edirəm!
        </p>
        <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
         <img className="comment-img" src={img5} alt="Stu Gerrard" />
         <div>
          <h3 className="text-white fw-bold mb-0">Stu Gerrard</h3>
          <p className="text-white fw-semibold">Enermech</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </SwiperSlide>

    {/* Slide 6 */}
    <SwiperSlide className="even p-4 flex-column gap-2">
     <div className="container">
      <div className="row justify-content-center text-center">
       <div className="col-12 col-md-10 col-lg-8">
        <p className="text-white fs-5 fw-bold">
         Operativliyə görə Sizə təşəkkür edirik. Uşaqlar, İT məsələlərimizin həllində bizə əla kömək edirsiniz.
        </p>
        <i className="ri-arrow-down-line text-white fs-4 fw-bold d-block my-2"></i>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
         <img className="comment-img" src={img6} alt="Arnoud Govaert" />
         <div>
          <h3 className="text-white fw-bold mb-0">Arnoud Govaert</h3>
          <p className="text-white fw-semibold">AA Services</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </SwiperSlide>
   </Swiper>
  </div>
 );
}

export default CommentSwiper;
