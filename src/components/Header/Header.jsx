import React from 'react';
import cl from "./Header.module.scss";

const Header = () => {
    return (
        <div className={cl.wrapper} id="mainblock">
            <header>
                <div className={cl.logo}>Matvey</div>
                <nav className={cl.navigation}>
                    <a href="#mainblock" className={cl.link}>Главная</a>
                    <a href="#statisticblock" className={cl.link}>Статистика</a>
                    <a href="#skillsblock" className={cl.link}>Навыки</a>
                    <a href="#servicesblock" className={cl.link}>Мои услуги</a>
                    <a href="#worksblock" className={cl.link}>Мои работы</a>
                    <a href="#contactsblock" className={cl.link}>Контакты</a>
                    <a href="#aboutblock" className={cl.link}>Обо мне</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;
