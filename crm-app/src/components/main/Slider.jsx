import React, { useState } from 'react'
import { EffectCoverflow, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect } from 'react';

function Slider() {
  const baseUrl = "http://webfulleducation-001-site1.atempurl.com";
  const [sliders, setSliders] = useState([]);

  const getAllAsync = async () => {
    try {
      await axios.get(`${baseUrl}/api/slider/getall`)
        .then((res) => {
          console.log(res.data)
          if (res.data.length > 0) {
            setSliders(res.data);
          }
        });

    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }
  useEffect(() => {
    getAllAsync()
  }, [])


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
        {
          sliders.map(function (slider, i) {
           return <SwiperSlide key={i}>
              <img src={`data:image/jpeg;base64,${slider.image}`} />
              <div className="text-area">
                <h1>{slider.title}</h1>
                <p>{slider.description}</p>
              </div>
            </SwiperSlide>
          })}

      </Swiper>
    </div>
  )
}

export default Slider