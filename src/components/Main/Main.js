import React, {useState} from 'react'
import StartInfo from "./StartInfo/StartInfo";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";
import {BrowserRouter, Route} from "react-router-dom";

export default function Main() {
    const [isModal, setIsModal] = useState(false)
    function openModal() {
        setIsModal(true)
    }
     function closeModal() {
        setIsModal(false)
    }
    return (
        <div className='main'>
                <Route  exact path="/" render={() => <StartInfo closeModal={ closeModal} openModal={ openModal} isModal={isModal}/>}/>
                <Route exact path="/about" render={() => <About/>}/>
                <Route  exact path="/services" render={() => <Services closeModal={ closeModal} openModal={ openModal} isModal={isModal}/>}/>
                <Route exact path="/portfolio" render={() => <Portfolio/>}/>
                <Route exact path="/contacts" render={() => <Contacts/>}/>
        </div>
    )
}