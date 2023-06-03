import React from 'react'
import { EffectCoverflow, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className='slider-area'>
      <Swiper
        slidesPerView={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={800}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require('../../assets/images/slide1.jpg')} />
          <div className="text-area">
            <h1>Developing skills</h1>
            <p>Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/images/slide2.jpg')} />
          <div className="text-area">
            <h1>Approppiate and easy</h1>
            <p>Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../assets/images/slide3.jpg')} />
          <div className="text-area">
            <h1>Modern Techniques</h1>
            <p>Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider