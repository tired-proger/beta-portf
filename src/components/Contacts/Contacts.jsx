import React, {useState} from 'react';
import cl from "./Contacts.module.scss";
import Title from "../shared/Title/Title";
import Select from 'react-select';
import "../../reactSelectStyles.scss";
import ContactsSocial from './ContactsSocial/ContactsSocial';
import Button from "../shared/Button/Button";
import { getOrderMessage } from '../../utils/getOrderMessage';

const options = [
    { value: "site", label: "Разаработка Сайта" },
    { value: "landing", label: "Вёрстка Лендинга" },
    { value: "bots", label: "Разаработка Бота" },
    { value: "parsers", label: "Написание Парсера" },
    { value: "backend", label: "Разаработка Бэкэнда (API)" },
    { value: "modification", label: "Доработки Проектов" },
    { value: "other", label: "Другое" }
];

const Contacts = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [inputsData, setInputsData] = useState({
        name: { value: "" },
        telegram: { value: "" },
        message: { value: "" }
    });

    const sendMessageToTelegram = async () => {
        const response = await fetch("https://api.telegram.org/bot7590653314:AAE_Av2jifsaMLhgwEUmm8Xn1InJwRK1yCQ/sendMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: -1002464061731,
                text: getOrderMessage(inputsData, selectedOption),
                parse_mode: "HTML"
            })
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className={cl.wrapper} id="contactsblock">
            <Title text="Мои контакты" title="Мои контакты" />

            <div className={cl.box}>
                <div className={cl.inputs}>
                    <div className={cl.title}>Сделайте заказ через форму</div>
                    <div className={cl.block}>
                        <div className={cl.label}>Ваше имя</div>
                        <input 
                            type="text" 
                            className={cl.input} 
                            placeholder="Ваше имя" 
                            value={inputsData.name.value}
                            onChange={(e) => setInputsData(state => ({...state, name: {value: e.target.value}}))}
                        />
                    </div>

                    <div className={cl.block}>
                        <div className={cl.label}>Что нужно сделать</div>
                        {/* <input type="text" className={cl.input} placeholder="Тип работы" /> */}
                        <Select
                            onChange={setSelectedOption}
                            options={options}
                            placeholder="Выберите значение"
                            isSearchable={false}
                            className={selectedOption ? `react-select-container selectedOptionValue` : `react-select-container`}
                            classNamePrefix="react-select"
                        />
                    </div>

                    <div className={cl.block}>
                        <div className={cl.label}>Ваш телеграм для связи</div>
                        <input 
                            type="text" 
                            className={cl.input} 
                            placeholder="Ваш телеграм (без @)" 
                            value={inputsData.telegram.value}
                            onChange={(e) => setInputsData(state => ({...state, telegram: {value: e.target.value}}))}
                        />
                    </div>

                    <div className={cl.block}>
                        <div className={cl.label}>Ваше сообщение</div>
                        <textarea 
                            className={cl.message} 
                            placeholder="Можно описать работу, уточнить по цене, срокам и т.д. (Любой вопрос)"
                            value={inputsData.message.value}
                            onChange={(e) => setInputsData(state => ({...state, message: {value: e.target.value}}))}
                        >
                        </textarea>
                    </div>

                    <Button isHover={true} clickHandler={sendMessageToTelegram}>Отправить</Button>
                </div>

                <div className={cl.divider}>
                    <div className={cl.dividerItem}>ИЛИ</div>
                </div>

                <ContactsSocial />
            </div>

        </div>
    );
}

export default Contacts;
