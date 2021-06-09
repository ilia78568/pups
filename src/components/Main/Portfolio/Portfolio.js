import React, {useState} from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from './images/1port.png'
import image2 from './images/2port.png'
import image3 from './images/3port.png'


export default function Portfolio() {

    const [isAll, setIsAll] = useState(true)

    const [portfolio1, setPortfolio1] = useState(false)
     const [portfolio2, setPortfolio2] = useState(false)
     const [portfolio3, setPortfolio3] = useState(false)

    const back = () => {
        setPortfolio1(false)
        setPortfolio2(false)
        setPortfolio3(false)
        setIsAll(true)
    }

    return (

       <div className="portfolio" >
           {isAll &&
               <>
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
                   <div className="portfolio-img portfolio-img1" onClick={() => {
                       setIsAll(false)
                       setPortfolio1(true)
           }}/>
                   <div className="portfolio-img portfolio-img2" onClick={() => {
                       setIsAll(false)
                       setPortfolio2(true)
           }}/>

                   <div className="portfolio-img portfolio-img3" onClick={() => {
                       setIsAll(false)
                       setPortfolio3(true)
           }}/>
                   <div className="portfolio-img portfolio-img4"/>
                   <div className="portfolio-img portfolio-img5"/>
                   <div className="portfolio-img portfolio-img6"/>

               </Carousel>
           </div></>}

           { portfolio1 && <Portfolio1 back={back}/>}
           { portfolio2 && <Portfolio2 back={back}/>}
            { portfolio3 && <Portfolio3 back={back}/>}
       </div>
    )
}

function Portfolio1( { back}) {
    return (
        <>
            <div className="nazad" onClick={back}>Назад</div>

        <div className="portfolio1">
            <div>
                 СТРАНА ПРИЯТНОГО УДИВЛЕНИЯ
                <div/>
                <div>
                    <div>
                         <div style={{
                             width: '1200px'
                         }}>В узком смысле это сайт, а в широком — портал с многоязыковой гибкой локализацией.</div>
                       <div className="secondP">Попадая на сайт, пользователи чувствуют, как их берут под руки и знакомят с особенностями Беларуси, различными лайфхаками,
                            подсовывая интересные мероприятия на тарелке. На одном сайте собраны все фишки и выдающиеся продукты страны.</div>
                    </div>

               <img src={image1} style={{
                   paddingTop: '130px',
                   paddingBottom: '130px'
               }}/>
                </div>

            </div>

        </div>
        </>
    )
}

function Portfolio2( { back}) {
    return (
        <>
            <div className="nazad" onClick={back}>Назад</div>

        <div className="portfolio1">
            <div>
                 WARGAMING ПОДХОД
                <div/>
                <div>
                    <div>
                         <div style={{
                   width: '1200px'
               }}>  Поработали для широко известной компании Wargaming — cоздали и оформили проморесурс для корпоративного фестиваля.</div>
                       <div className="secondP">Сайт с чёткой подачей информации. Яркая выкладка, колористика визуально объединяют ресурс с вселенной Wargaming.
                             Пользователь чувствует себя своим с первого скролла, включается в пространство игры — работают стилистика, графика, ясная навигация,
                             дружественная по отношению как к уже бывалому стрелку, так и к новоприбывшему, случайно или по наводке. </div>
                    </div>

               <img style={{
                   paddingTop: '140px',
                   paddingBottom: '120px'
               }} src={image2}/>
                </div>

            </div>

        </div>
        </>
    )
}

function Portfolio3( { back}) {
    return (
        <>
            <div className="nazad" onClick={back}>Назад</div>

        <div className="portfolio1">
            <div>
                 ПОРТАЛ «НАША НИВА»
                <div/>
                <div>
                    <div>
                         <div style={{
                           width: '1000px',
                       }}>«Наша Нива» — это большущий объём информации. Как его качественно обработать да ещё и адаптировать подачу для многообразной целевой аудитории?
                       Вдохновлялись редакционным опытом «нашаніўцаў», стремились не выйти за рамки отшлифованной веками редакционно-издательской модели и вместе с
                       тем остаться в тренде.</div>
                       <div className="secondP" style={{
                       }}>Тематика самая разная, полей для заполнения куча, гора фото, видео, текстов,
                       которые надо грамотно структурировать и оформить удобным для пользователя образом.
                       Результат нашей работы: «Наша Нива» стала третьим по популярности в Беларуси и самым популярным
                       беларусскоязычным источником информации.</div>
                    </div>

               <img src={image3} style={{
                   paddingTop: '260px'
               }}/>
                </div>

            </div>

        </div>
        </>
    )
}