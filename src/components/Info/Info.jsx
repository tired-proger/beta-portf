import React from 'react';
import cl from "./Info.module.scss";
import GlobalSvgSelector from '../../utils/globalSvgSelector';
import Title from '../shared/Title/Title';

const Info = () => {
    return (
        <>
        <Title title="Обо мне" text="Обо мне" />
        <div className={cl.wrapper} id="aboutblock">
            <div className={cl.first}>
                <ul className={cl.socials}>
                    <li className={cl.social}>
                        <a href="#" className={cl.link}>
                            <GlobalSvgSelector svgname="telegramimg" className={cl.icon} />
                        </a>
                    </li>
                    <li className={cl.social}>
                        <a href="#" className={cl.link}>
                        <GlobalSvgSelector svgname="youtubeimg" className={cl.iconYt} />
                        </a>
                    </li>
                    <li className={cl.social}>
                        <a href="#" className={cl.link}>
                        <GlobalSvgSelector svgname="githubimg" className={cl.iconGt} />
                        </a>
                    </li>
                    <li className={cl.social}>
                        <a href="#" className={cl.link}>
                        <GlobalSvgSelector svgname="vkimg" className={cl.icon} />
                        </a>
                    </li>
                </ul>
                <div className={cl.photo}>
                    <img className={cl.photoItem} src="./image.jpg" alt="" />
                </div>
            </div>
            <div className={cl.box}>
                <h2 className={cl.title}>Немного обо мне</h2>
                <div className={cl.text}>
                    Я веб разработчик из города Перми
                </div>
                <div className={cl.subtext}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat ducimus ad, molestias alias aliquam doloribus corporis aperiam nesciunt sint quos iste veniam ab illo possimus autem unde voluptatibus. Cumque?
                </div>
                <ul className={cl.list}>
                    <li className={cl.listItem}>
                        <span className={cl.itemInfo}>Имя</span>:<span className={cl.itemData}>Цаплин Матвей</span>
                    </li>
                    <li className={cl.listItem}>
                        <span className={cl.itemInfo}>Дата рождения</span>:<span className={cl.itemData}>27.08.2002</span>
                    </li>
                    <li className={cl.listItem}>
                        <span className={cl.itemInfo}>Адрес</span>:<span className={cl.itemData}>Россия, город Пермь</span>
                    </li>
                    <li className={cl.listItem}>
                        <span className={cl.itemInfo}>Почта</span>:<span className={cl.itemData}>Caplinmatvey.12345@gmail.com</span>
                    </li>
                    <li className={cl.listItem}>
                        <span className={cl.itemInfo}>Доступен для заказа</span>:<span className={cl.itemData}>Да</span>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Info;