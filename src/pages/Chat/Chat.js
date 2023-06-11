
import StyledChat from "./StyledChat";
import MapG  from '../../GoogleMap/MapG';
import React from 'react';
import { IonContent, IonPage, IonicSlides } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';


export default function Chat() {

  return (
    <StyledChat>
      <h1>Chat</h1>
      <IonContent>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]}
          autoplay={true}
          keyboard={true}
          pagination={true}
          scrollbar={true}
          zoom={true}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </IonContent>
      {/* <MapG/>  */}
    </StyledChat>

  );
}
