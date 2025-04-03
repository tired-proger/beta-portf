import React, {useContext, useMemo, useState} from 'react';
import cl from "./Contacts.module.scss";
import Title from "../shared/Title/Title";
import Select from 'react-select';
import "../../reactSelectStyles.scss";
import ContactsSocial from './ContactsSocial/ContactsSocial';
import Button from "../shared/Button/Button";
import { getOrderMessage } from '../../utils/getOrderMessage';
import { sendMessageToTelegram } from '../../utils/sendMessageToTelegram';
import FileList from '../shared/FileList/FileList';
import { getFileData } from '../../utils/getFileData';
import { getFileSize } from '../../utils/getFileSize';
import { generateUniqueId } from "../../utils/generateUniqueId";
import { sendDocumentsToTelegram } from '../../utils/sendDocumentsToTelegram';
import { validateSendingFile } from '../../utils/validateSendingFile';
import { availableExtensions } from '../../data/data';
import { modalContext } from '../../store/ModalContext';
import WarningImage from "../../assets/img/warning.svg";

const options = [
    { value: "site", label: "Разаработка Сайта" },
    { value: "landing", label: "Вёрстка Лендинга" },
    { value: "bots", label: "Разаработка Бота" },
    { value: "parsers", label: "Написание Парсера" },
    { value: "backend", label: "Разаработка Бэкэнда (API)" },
    { value: "modification", label: "Доработки Проектов" },
    { value: "other", label: "Другое" }
];

const defaultErrorLabels = {
    name: "Произошла непредвиденная ошибка",
    description: "Для решения проблемы, необходимо перезагрузить сайт и очистить кэш"
};

//callback for reduce code volume
const setErrorState = (setCallback, result) => {
    setCallback({ isOpen: true, isVisible: true, type: "error", 
        data: {
            title: result.error ? result.error.name : defaultErrorLabels.name,
            description: result.error ? result.error.description : defaultErrorLabels.description,
        } 
    });
}

const validateInputsValueHandler = (inputsData, setInputsData) => {
    if (!inputsData.name.value.trim()) {
        setInputsData(state => ({ ...state, name: { ...state.name, error: true } }));
        return false;
    }
    if (!inputsData.telegram.value.trim() || inputsData.telegram.value.includes("@")) {
        setInputsData(state => ({ ...state, telegram: { ...state.telegram, error: true } }));
        return false;
    }
    if (!inputsData.message.value.trim()) {
        setInputsData(state => ({ ...state, message: { ...state.message, error: true } }));
        return false;
    }
    return true;
}

const Contacts = () => {

    const { setModalData } = useContext(modalContext);

    const [files, setFile] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inputsData, setInputsData] = useState({
        name: { value: "", error: false },
        telegram: { value: "", error: false },
        message: { value: "", error: false }
    });

    const sendHandler = async () => {

        const validateResult = validateInputsValueHandler(inputsData, setInputsData);
        if (!validateResult) return;

        setIsLoading(true);

        const resultMessage = await sendMessageToTelegram(getOrderMessage, inputsData, selectedOption);
        if (resultMessage.error) {
            setErrorState(setModalData, resultMessage);
            setIsLoading(false);
            return;
        }

        const resultMessageDocuments = await sendDocumentsToTelegram(files, inputsData.name.value);
        if (resultMessageDocuments.some(el => !el.success)) {
            let failureFiles = resultMessageDocuments.filter(el => !!el.file);
            setIsLoading(false);
            setErrorState(setModalData, {
                error: {
                    name: "Произошла ошибка при отправке файлов",
                    description: `
                        Необходимо переотправить файлы после перезагрузки или очистки кэша страницы. 
                        Файлы, которые не удалось отправить: ${failureFiles.map(el => `"${el.file}"`).join(", ")}.
                    `
                }
            });
            return;
        }

        //files sending success
        setIsLoading(false);
        setFile([]);
        setInputsData({ name: { value: "" }, telegram: { value: "" }, message: { value: "" } });
        setSelectedOption(null);

        setModalData({ isOpen: true, isVisible: true, type: "form", data: {} });

    }

    const addFileHandler = (file) => {

        const {title, extension} = getFileData(file.name);
        const result = validateSendingFile({ extension, size: file.size }, availableExtensions);

        //validate is not success
        if (result.error) {
            setErrorState(setModalData, result);
            return;
        }

        const size = getFileSize(file.size);
        const fileId = generateUniqueId();
        setFile([...files, { fileId, title, extension, size, file  }]);

    } 

    const removeFileHandler = (id) => {
        setFile(state => state.filter(file => file.fileId !== id));
    }

    const fileData = useMemo(() => ({ files, addFileHandler, removeFileHandler, isLoading }), [files, isLoading]);

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
                            className={isLoading ? `${cl.input} ${cl.loading}` : cl.input} 
                            placeholder="Ваше имя" 
                            value={inputsData.name.value}
                            onChange={(e) => setInputsData(state => ({...state, name: {value: e.target.value}}))}
                            disabled={isLoading}
                            onFocus={() => setInputsData(state => ({ ...state, name: { ...state.name, error: false } }))}
                        />
                        { inputsData.name.error && (
                            <div className={cl.error}>
                                <img src={WarningImage} alt="" />
                                <span>Заполните поле корректным образом</span>
                            </div>) }
                    </div>

                    <div className={cl.block}>
                        <div className={cl.label}>Что нужно сделать</div>
                        <Select
                            onChange={setSelectedOption}
                            options={options}
                            placeholder="Выберите значение"
                            isSearchable={false}
                            className={selectedOption ? `react-select-container selectedOptionValue` : `react-select-container`}
                            classNamePrefix="react-select"
                            isDisabled={isLoading}
                        />
                    </div>

                    <div className={cl.block}>
                        <div className={cl.label}>Ваш телеграм для связи</div>
                        <input 
                            type="text" 
                            className={isLoading ? `${cl.input} ${cl.loading}` : cl.input} 
                            placeholder="Ваш телеграм (без @)" 
                            value={inputsData.telegram.value}
                            onChange={(e) => setInputsData(state => ({...state, telegram: {value: e.target.value}}))}
                            disabled={isLoading}
                            onFocus={() => setInputsData(state => ({ ...state, telegram: { ...state.telegram, error: false } }))}
                        />
                        { inputsData.telegram.error && (
                            <div className={cl.error}>
                                <img src={WarningImage} alt="" />
                                <span>Заполните поле корректным образом</span>
                            </div>) }
                    </div>

                    <div className={cl.block}>
                        <div className={cl.label}>Ваше сообщение</div>
                        <textarea 
                            className={isLoading ? `${cl.message} ${cl.loading}` : cl.message} 
                            placeholder="Можно описать работу, уточнить по цене, срокам и т.д. (Любой вопрос)"
                            value={inputsData.message.value}
                            onChange={(e) => setInputsData(state => ({...state, message: {value: e.target.value}}))}
                            disabled={isLoading}
                            onFocus={() => setInputsData(state => ({ ...state, message: { ...state.message, error: false } }))}
                        >
                        </textarea>
                        { inputsData.message.error && (
                            <div className={cl.error}>
                                <img src={WarningImage} alt="" />
                                <span>Заполните поле корректным образом</span>
                            </div>) }
                    </div>

                    <div className={cl.block}>
                        <FileList fileData={fileData} />
                    </div>

                    <Button 
                        isDisabled={isLoading} 
                        isHover={true} 
                        isLoading={isLoading}
                        clickHandler={sendHandler}
                    >
                        { isLoading ? "Отправка" : "Отправить" }
                    </Button>
                </div>

                <div className={cl.divider}>
                    <div className={cl.dividerItem}>ИЛИ</div>
                </div>

                <ContactsSocial />
            </div>

        </div>
    );
}

export default React.memo(Contacts);
