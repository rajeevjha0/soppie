
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "@/styles/swiper.module.css"
import { Pagination, Navigation } from 'swiper/modules';

const CustomSwiper = () => {
  return (
    <Swiper
    autoplay={{ delay: 1000 }} 
      speed={1000}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='style.CustomSwiper'>
       <Image src="/Images/1.png" alt="banner" width={1900} height={600}/></SwiperSlide>

       <SwiperSlide className='style.CustomSwiper'>
       <Image src="/Images/2.png" alt="banner" width={1900} height={600}/></SwiperSlide>

       <SwiperSlide className='style.CustomSwiper'>
       <Image src="/Images/5.png" alt="banner" width={1900} height={600}/></SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
