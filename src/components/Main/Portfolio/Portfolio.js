import React from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Portfolio() {

    return (
       <div className="portfolio" >
           <div> Наше портфолио</div>
           <div>Лучше всего о нас скажут наши работы. Сайты-визитки и лендинги, интернет-магазины и корпоративные сайты, продвижение и реклама.</div>
           <div>Проекты</div>
           <div className="swiper">
               <Carousel plugins={[
                    'infinite',
                    'arrows',
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                       numberOfSlides: 3
                      }
                    },
                  ]}>
                   <img src="http://placekitten.com/g/400/200" width="310" height="310"/>
                   <img src="http://placekitten.com/g/400/200" width="310" height="310"/>
                   <img src="http://placekitten.com/g/400/200" width="310" height="310"/>
                   <img src="http://placekitten.com/g/400/200" width="310" height="310"/>
               </Carousel>
           </div>
       </div>
    )
}