import React, {useState} from 'react'
import './modal.css'

export default function Modal(props) {
    const [isConfirm, setIsConfirm] = useState(false)
    function close() {
        props.closeModal()
    }
    function confirm() {
        setIsConfirm(true)

    }
    return (
        <div className="modal">
            {!isConfirm ? <div className="modal-block">
                <form className="modal-form">
                    <label> Как вас зовут?</label>
                    <input type='text' />
                    <label> Ваш номер телефона?</label>
                    <input type='phone' />
                    <label> Ваша почта?</label>
                    <input type='mail' />
                     <label> Краткое описание</label>
                    <input type='text' />

                </form>
                <button onClick={close}>Закрыть</button>
                 <button onClick={confirm}>Подтвердить</button>
            </div> :
                <div className="modal-block2">
                    <p> Спасибо мы вам перезвоним</p>
                    <button onClick={close}>Окей</button>
                </div>
            }

        </div>
    )
}