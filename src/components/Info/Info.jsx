import React, { useEffect, useState } from 'react';
import cl from "./Info.module.scss";
import GlobalSvgSelector from '../../utils/globalSvgSelector';
import Title from '../shared/Title/Title';

const Info = () => {

    const [isCopied, setIsCopied] = useState(false);

    const copyHandler = () => {
        if (!isCopied) {
            navigator.clipboard.writeText("Caplinmatvey.12345@gmail.com");
            setIsCopied(true);
        }
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => setIsCopied(false), 2000)
        }
    }, [isCopied]);

    return (
        <>
        <Title title="Обо мне" text="Обо мне" />
        <div className={cl.wrapper} id="aboutblock">
            <div className={cl.first}>
                <ul className={cl.socials}>
                    <li className={cl.social}>
                        <a href="https://t.me/time_for_chill" className={cl.link}>
                            <GlobalSvgSelector svgname="telegramimg" className={cl.icon} />
                        </a>
                    </li>
                    <li className={cl.social}>
                        <a href="#" className={cl.link}>
                        <GlobalSvgSelector svgname="youtubeimg" className={cl.iconYt} />
                        </a>
                    </li>
                    <li className={cl.social}>
                        <a href="https://github.com/tired-proger" className={cl.link}>
                        <GlobalSvgSelector svgname="githubimg" className={cl.iconGt} />
                        </a>
                    </li>
                    <li className={cl.social}>
                        <a href="https://vk.com/happy_makerr" className={cl.link}>
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
                    <div style={{ marginBottom: "10px" }}>
                        Когда я учился в школе, я думал, что стану археологом. Частично я был прав, так как откапывать баги мне приходится каждый день))
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        Изучение программирования началось с колледжа, с тех пор уже несколько лет неизменен этому делу. Сейчас работаю удалённо, даю пользу на <a className={cl.linkYtInline} href="https://youtube.com">своём ютуб канале</a> и пишу обучающие статьи
                    </div>
                    <div>
                        В свободное от программирования время люблю сходить на тренировку в зал, выбраться с друзьями на природу, ну или просто посмотреть подкастик)
                    </div>
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
                        <span className={cl.itemInfo}>Почта</span>:<span 
                            className={`${cl.itemData} ${!isCopied ? cl.copy : ""}`} 
                            onClick={copyHandler}
                        >
                            { isCopied ? "Почта скопирована!" : "Caplinmatvey.12345@gmail.com" }
                        </span>
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

export default React.memo(Info);