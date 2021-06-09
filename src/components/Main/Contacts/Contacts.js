import React from 'react'
import './contacts.css'

export default function Contacts() {

    return (
       <div className="contacts">
           <div>БЕЛАРУССКОЕ ТРУДОЛЮБИЕ С ЕВРОПЕЙСКИМ МЫШЛЕНИЕМ</div>
           <div>Мы всегда открыты к взаимодействию с нашими партнерами. Если вас заинтересовало, чем мы можем помочь вашему бизнесу,
               — пожалуйста, обращайтесь.</div>
           <div>Вместе мы сможем сделать крутой проект!</div>
           <div className="contacts-block">
               <div>
                   <div>Минск</div>
                   <div>Главный офис</div>
                   <div>+375 17 280-67-04</div>
                   <div>list@pras.by</div>
                   <div>ул. Восточная 129, 2 220113, <br/>г. Минск</div>

               </div>
               <div className="map">
                   <iframe
                       src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3949.797592235171!2d27.594181219716734!3d53.93949475805525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x46dbcf6b30086775%3A0x77743115e32337db!2sUlitsa%20Vostochnaya%20129%2C%20Minsk!3m2!1d53.939455599999995!2d27.5975918!5e0!3m2!1sen!2sby!4v1620374117815!5m2!1sen!2sby"
                       width="600" height="450"  allowFullScreen="" loading="lazy"></iframe>
               </div>
           </div>
       </div>
    )
}