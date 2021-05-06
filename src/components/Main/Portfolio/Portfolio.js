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
                   <a href="https://ru.pras.company/projects/belarus-travel" target='_blank'><div className="portfolio-img portfolio-img1"></div></a>
                   <a href="https://ru.pras.company/projects/wargaming" target='_blank'><div className="portfolio-img portfolio-img2"></div></a>
                   <a href="https://ru.pras.company/projects/nn" target='_blank'><div className="portfolio-img portfolio-img3"></div></a>
                   <a href="https://ru.pras.company/projects/undp" target='_blank'><div className="portfolio-img portfolio-img4"></div></a>
                   <a href="https://ru.pras.company/projects/lazycard" target='_blank'><div className="portfolio-img portfolio-img5"></div></a>
                   <a href="https://ru.pras.company/projects/mir-tvr-belarus" target='_blank'><div className="portfolio-img portfolio-img6"></div></a>
               </Carousel>
           </div>
       </div>
    )
}