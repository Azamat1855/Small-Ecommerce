import {React, useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const Swipe = () => {
  const [slide, setSlide] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(data => {
      setSlide(data.products)
    })
  }, [])

  const FilteredSlides = slide.filter(slide => slide.rating > 4.8)
  console.log(FilteredSlides)
  
return (
  <div className='w-[85%] mx-auto py-10'>
    <p className='font-bold text-[30px] mb-[20px] text-white'>Highly rated products</p>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-[550px] rounded-3xl"
      >
        {FilteredSlides.map((slide, id) => (
      <div key={id}>
        <SwiperSlide>
          <img src={slide.thumbnail} className='cover w-full h-full' alt="" />
        </SwiperSlide>
      </div>
    ))}
      </Swiper>
    
  </div>
)}

export default Swipe