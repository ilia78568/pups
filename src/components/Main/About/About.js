import React from 'react'
import './about.css'
import video from './video.mp4'
export default function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-header">ЭФФЕКТИВНЫЕ IT-РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА</div>
                <div className="about-description">Более 6 лет минская компания PRAS разрабатывает успешные продукты в
                    области веба, мобильных программ, графического и моушн дизайна. </div>
                <div className="about-description">Наши работы отмечены беларусскими и международными наградами,
                а среди клиентов — Maybelline, ООН, World of Tanks и кинокомпания «МИР».</div>
                <div className="about-description"> Технологии</div>
                <div className="tech-block">
                        <video autoPlay loop id="myVideo" src={video}>
                        </video>
                    <div>
                        <div>Технологии - это фундамент любого проекта. Мы активно развиваем текущие и постоянно пробуем новые. Своим клиентам мы предлагаем только проверенные технические решения, которыми просто управлять и развивать.
                            Чтобы упростить ваше решение о работе с нами мы собрали наш технологический стек в одном месте.</div>
                        <div className="tech-table">
                            <div>
                                 <div>BACKEND</div>
                                <div>FRONTEND</div>
                                <div>FRONTEND</div>
                                <div>FRONTEND</div>
                            </div>
                           <div>
                                <div>C#, .NET / ASP.NET MVC, PHP YII, C++</div>
                                <div>HTML5, CSS3, BOOTSTRAP, LESS, SVG, JS / JQUERY, GRUNT, ANGULAR.JS, KNOCKOUT.JS</div>
                                <div>OBJECTIVE C, JAVA, UNITY</div>
                                <div>MSSQL, MYSQL, MONGODB</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clients">Клиенты</div>
                <div className="about-clients">
                    <div className="about-clients-div img1" ></div>
                    <div className="about-clients-div img2"></div>
                    <div className="about-clients-div img3"></div>
                    <div className="about-clients-div img4"></div>
                    <div className="about-clients-div img5"></div>
                    <div className="about-clients-div img6"></div>
                    <div className="about-clients-div img7"></div>
                    <div className="about-clients-div img8"></div>

                </div>
            </div>
        </div>

    )
}