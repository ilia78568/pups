import React, {useState} from 'react'
import './modal.css'
import {ReactComponent as SelectArrow} from './select-arrow.svg';

export default function Modal(props) {
    const [isConfirm, setIsConfirm] = useState(false)
    const options = [
        {
            value: 'Корпоративный сайт',
            label: 'Корпоративный сайт',
        },
        {
            value: 'Лендинг',
            label: 'Лендинг',
        },
        {
            value: 'Интернет-магазин',
            label: 'Интернет-магазин',
        },
        {
            value: 'Сайт-визитка',
            label: 'Сайт-визитка',
        }
    ];
    const [selectedOption, setSelectedOption] = useState('Корпоративный сайт');
    function close() {
        props.closeModal()
    }
    function confirm() {
        setIsConfirm(true)

    }
    return (
        <div className="modal">
            {!isConfirm ? <div className={"modal-block " + (props.select && 'modal-select')}>
                <form className="modal-form">
                    <label> Как вас зовут?</label>
                    <input type='text' className="modal-input1" placeholder="Имя"/>
                    <label> Ваш номер телефона?</label>
                    <input type='phone' className="modal-input1 " placeholder="Телефон"/>
                    <label> Ваша почта?</label>
                    <input type='mail' className="modal-input1"  placeholder="Почта"/>
                     <label> Краткое описание</label>
                    <input type='text' className="modal-input1" placeholder="Описание проекта"/>
                    { props.select && <LeftBarSelect options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>}

                </form>
                <button onClick={close}>Закрыть</button>

                 <button onClick={confirm}>Подтвердить</button>

            </div> :
                <div className="modal-block2">
                    <p> Спасибо за заяку!
                        <br/> Mы вам перезвоним</p>
                    <button onClick={close}>Окей</button>
                </div>

            }

        </div>
    )
}



function LeftBarSelect({
 options,
 setSelectedOption,
 selectedOption
}) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSelect = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value.value);
    setIsOpen(false);
  };

  return (
    <div className="select">
         <div className="select_header" onClick={toggleSelect}>
              <div className="select_team">
        </div>
            <div className="select_header_name">
                {selectedOption}
            </div>
            <div className="arrow">
                <SelectArrow />
            </div>
        </div>

        {isOpen && (
          <div>
            <ul className="select_list">
              {options.map(option => (
                <li onClick={onOptionClicked(option)} key={option.label}>
                  {
                      <>
                          {option.label}
                      </>
                  }
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}



