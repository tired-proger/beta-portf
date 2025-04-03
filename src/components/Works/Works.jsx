import React, { useState, useContext } from 'react';
import cl from "./Works.module.scss";
import Title from '../shared/Title/Title';
import WorksTab from './WorksTab/WorksTab';
import Note from '../shared/Note/Note';
import { modalContext } from '../../store/ModalContext';
import { projectsList } from '../../data/data';

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
                            key={project.id}
                            className={cl.card}
                            onClick={() => setModalData({
                                isOpen: true,
                                isVisible: true,
                                type: "project",
                                data: {
                                    title: project.title,
                                    description: project.description,
                                    link: project.data.link,
                                    github: project.data.github,
                                    technologies: project.data.technologies,
                                    features: project.data.features,
                                    imgList: project.data.imgList
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

export default React.memo(Works);