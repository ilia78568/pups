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
               <div ></div>
               <div className="map">
                   <iframe
                       src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4697.259136158952!2d27.598058258508164!3d53.93832465179646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d53.9394366!2d27.5975847!5e0!3m2!1sen!2sby!4v1620311514230!5m2!1sen!2sby"
                       width="600" height="450"  allowFullScreen="" loading="lazy"></iframe>
               </div>
           </div>
       </div>
    )
}