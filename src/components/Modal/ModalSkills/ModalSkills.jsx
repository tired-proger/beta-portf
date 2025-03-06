import React, { useState } from 'react';
import cl from "./ModalSkills.module.scss";
import Button from '../../shared/Button/Button';
import Note from "../../shared/Note/Note";
import Badge from '../../shared/Badge/Badge';

const tabsContent = [
    {
        title: "HTML",
        description: "Язык разметки, используется для определения места, где на сайте будет отображаться кнопка, картинка, меню и другие элементы",
        technologies: ["HTML5", "PUG"]
    },
    {
        title: "CSS",
        description: "Язык стилизации разметки, используется что бы раскрасить кнопку, выделить текст на сайте, добавить анимацию и т.д.",
        technologies: ["CSS3", "SASS", "TailwindCSS"]
    },
    {
        title: "JavaScript",
        description: "Язык программирования, используется для создания динамики на сайте (слайдеры, модальные окна, спойлеры и т.д. реализовано с помощью JavaScript)",
        technologies: ["ES2024", "TypeScript", "AnimeJs", "ChartJs", "SwiperJs", "AOS", "Leaflet"]
    },
    {
        title: "React",
        description: "Библиотека, используется для создания сложных веб приложений, за счёт разбивки кода на модули, скорости работы, декларативности и т.д.",
        technologies: ["NextJs", "Redux", "MUI", "AntDesign", "React-Router-Dom", "Zustand", "React-Hook-Form", "React-Query", "Jest", "Framer Motion", "React-Helmet", "React-Select", "React-Toastify", "Resend", "clsx"]
    },
    {
        title: "Node Js",
        description: "JavaScript на сервере, используется для обработки запросов от пользователей, сохранения необходимой информации в базе данных и т.д.",
        technologies: ["ExpressJs", "Multer", "PostgreSql", "SocketIO", "RestAPI", "HTTP/HTTPS", "CRUD", "CORS", "Cookie", "JWT"]
    },
    {
        title: "Прочее",
        description: "Другие технологии которыми владею и которые помогают при реализации проектов, но не вошедшие в другие категории.",
        technologies: ["PuppeteerJs", "GrammyJs", "AI chats"]
    }
];

const ModalSkills = () => {

    const [activeTab, setActiveTab] = useState("HTML");

    return (
        <div className={cl.wrapper} id="#skillsblock">
            <h2 className={cl.title}>Полный список навыков</h2>

            <div className={cl.tabs}>
                {
                    tabsContent.map(data => data.title).map(title => (
                        <Button
                            isHover={true}
                            clickHandler={() => setActiveTab(title)}
                            size="small"
                            isSelected={title === activeTab}
                        >
                            {title}
                        </Button>
                    ))
                }
            </div>

            <div className={cl.box}>
                {
                    tabsContent.filter(data => data.title === activeTab).map(data => (
                        <>
                            <div className={cl.techName}>{data.title}</div>
                            <div className={cl.inner}>
                                <Note 
                                    setImage={true}
                                    size="small"
                                    styles={{ alignItems: "flex-start" }}
                                >
                                    {data.description}
                                </Note>
                                <div className={cl.notice}>Связанные технологии, которыми владею:</div>
                                <div className={cl.list}>
                                    {
                                        data.technologies.map(tech => (<Badge content={tech} />))
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
}

export default ModalSkills;
