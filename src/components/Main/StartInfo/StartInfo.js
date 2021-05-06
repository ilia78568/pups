import React from 'react'
import './startInfo.css'
import Modal from "../Modal/Modal";

export default function StartInfo(props) {
    function open() {
        props.openModal()
    }
    return (
        <>

        <div className="startInfo-block">
            <div className="startInfo-content">
                <h1 className="h1"> Сайты, мобильные приложения, веб-сервисы</h1>
                <div className="sec-text">Создаем, продвигаем и выводим на прибыль</div>
                <button className="startInfo-btn" onClick={open}>Связаться</button>
            </div>
            <div className="open-source-image"></div>
        </div>
            {props.isModal && <Modal closeModal={props.closeModal}/>}
  </>
    )
}