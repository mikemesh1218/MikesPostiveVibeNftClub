import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img1 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img1.jpg'
import Img2 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img 2.jpg'
import Img3 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img3.jpg'
import Img4 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img4.jpg'
import Img5 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img5.jpg'
import Img6 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img6.jpg'
import Img7 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img7.jpg'



import { Pagination, Navigation, Autoplay, EffectCards } from 'swiper/modules';




const Container = styled.div`
width: 25vw;
height: 75vh;
margin: 0 auto;

.swiper{
    width: 100%;
    height: 100%;

}
.swiperslide{
  display: flex;
  justify-content: center;
  align-items: center;
}
.images{
  width: 450px;
  height: 650px;
  border: 4px solid Orange;
  border-radius: 20px;
}


`





const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        pagination={{
          type:'bullets',
        }}
        navigation={true}
        scrollbar={{
          draggable:true
        }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Img1} alt='Avatars' className='images'/></SwiperSlide>
        <SwiperSlide><img src={Img2} alt='Avatars' className='images'/></SwiperSlide>
        <SwiperSlide><img src={Img3} alt='Avatars' className='images'/></SwiperSlide>
        <SwiperSlide><img src={Img4} alt='Avatars' className='images'/></SwiperSlide>
        <SwiperSlide><img src={Img5} alt='Avatars' className='images'/></SwiperSlide>
        <SwiperSlide><img src={Img6} alt='Avatars' className='images'/></SwiperSlide>
        <SwiperSlide><img src={Img7} alt='Avatars' className='images'/></SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Carousel