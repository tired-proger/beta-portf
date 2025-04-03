import React from 'react';
import cl from "./ModalForm.module.scss";
import CheckboxImage from "../../../assets/img/checkbox.svg";
import WarningImage from "../../../assets/img/warning.svg";
import TelegramImage from "../../../assets/img/telegram.svg";
import VkImage from "../../../assets/img/vk.svg";

const ModalForm = () => {
    return (
        <div className={cl.box}>
            <div className={cl.top}>
                <div className={cl.title}>Ваш Заказ Успешно Получен</div>
            </div>
            <div className={cl.description}>
                <img src={WarningImage} alt="" />
                <span>
                    Вы можете также написать напрямую в любую из предложенных соц. сетей, так я быстрее отвечу на Ваши вопросы и войду в контекст заказа
                </span>
            </div>
            <div className={cl.bottom}>
                <a className={cl.link} href="https://t.me/time_for_chill" target="_blank">
                    <img src={TelegramImage} alt="" />
                    <span>Телеграм</span>
                </a>
                <a className={cl.link} href="https://vk.com/happy_makerr" target="_blank">
                    <img src={VkImage} alt="" />
                    <span>Вконтакте</span>
                </a>
            </div>
        </div>
    );
}

export default ModalForm;