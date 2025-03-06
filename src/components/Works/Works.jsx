import React, { useState, useContext } from 'react';
import cl from "./Works.module.scss";
import Title from '../shared/Title/Title';
import WorksTab from './WorksTab/WorksTab';
import Note from '../shared/Note/Note';
import { modalContext } from '../../store/ModalContext';

const projectsList = [
    {
        title: "Сайт курса",
        description: "Сайт продажи курса по программированию",
        data: {
            img: "./course_project.png",
            link: "https://course-site-alpha.vercel.app",
            github: "https://github.com/tired-proger/course_site",
            technologies: [
                "React", "Swiper", "Sass"
            ],
            features: [
                "Прогресс прокрутки страницы", "Спойлеры", "Слайдер", "Masonry сетка"
            ]
        }
    },
    {
        title: "Сайт со странами",
        description: "Сайт с информацией о странах",
        data: {
            img: "./country_project.png",
            link: "https://country-app-sage.vercel.app",
            github: "https://github.com/tired-proger/country-app",
            technologies: [
                "React", "Redux", "Sass", "Redux Thunk", "React Router Dom", "React Select"
            ],
            features: [
                "Смена темы приложения", "Поиск конкретной страны", "Фильтрация стран", "Пагинация"
            ]
        }
    },
    {
        title: "Сайт расчёта майнинга",
        description: "Сайт на тематику криптовалюты",
        data: {
            img: "./crypto_project.png",
            link: "https://tired-proger.github.io/crypto-site/",
            github: "https://github.com/tired-proger/crypto-site",
            technologies: [
                "Pug", "Sass", "JavaScript"
            ],
            features: [
                "Адаптивность", "Работа с API", "Калькулятор"
            ]
        }
    },
    {
        title: "Игровой тест",
        description: "Тест по сериалу Скибиди Туалеты",
        data: {
            img: "./test_project.png",
            link: "https://skibidi-test-mu.vercel.app",
            github: "https://github.com/tired-proger/skibidi-test",
            technologies: [
                "React", "TypeScript", "React Router Dom", "Framer Motion", "Sass", "React Confetti"
            ],
            features: [
                "Анимации появлений", "Логика определения персонажа", "Ленивая подгрузка изображений"
            ]
        }
    }
];

const Works = () => {

    const [work, setWork] = useState("all");
    const {setModalData} = useContext(modalContext);

    return (
        <div className={cl.wrapper} id="worksblock">
            <Title title="Последние работы" text="Портфолио" />

            <WorksTab clickHandler={setWork} workType={work} />

            <Note setImage={true}>Нажмите на карточку, для более детального просмотра проекта</Note>

            <div className={cl.box}>
                {
                    projectsList.map(project => (
                        <div 
                            className={cl.card}
                            onClick={() => setModalData({
                                isOpen: true,
                                isVisible: true,
                                type: "project",
                                data: {
                                    img: project.data.img,
                                    title: project.title,
                                    description: project.description,
                                    link: project.data.link,
                                    github: project.data.github,
                                    technologies: project.data.technologies,
                                    features: project.data.features
                                }
                            })}
                        >
                            <img src={project.data.img} alt="" />
                            <div className={cl.body}>
                                <div className={cl.title}>{project.title}</div>
                                <div className={cl.description}>{project.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Works;
