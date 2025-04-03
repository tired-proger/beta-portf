import React from 'react';
import cl from "./ModalProject.module.scss";
import Badge from '../../shared/Badge/Badge';
import ModalProjectLink from './ModalProjectLink/ModalProjectLink';
import ModalProjectSlider from './ModalProjectSlider/ModalProjectSlider';
import { getMatchMediaQuery } from '../../../utils/getMatchMediaQuery';

const match = getMatchMediaQuery(500);

const ModalProject = (props) => {

    let { description, link, github, technologies, features, imgList } = props.data;
    let linkList = [
        { id: 1, link: link, content: "Ссылка на проект", svgname: "linkToProject" },
        { id: 2, link: github, content: "Ссылка на код", svgname: "codeToProject" }
    ];

    return (
        <div className={cl.wrapper}>

            <ModalProjectSlider imgList={imgList} />

            <div className={cl.info}>
                <div className={cl.titles}>
                    <div className={cl.desc}>{description}</div>
                </div>

                <div className={cl.links}>
                    <div className={cl.blockTitle}>Ссылки:</div>
                    <div className={cl.linksBox}>
                        {
                            linkList.map((data, index) => (
                                <ModalProjectLink 
                                    key={data.id}
                                    link={data.link} 
                                    content={data.content} 
                                    svgname={data.svgname}
                                    isLast={index === 1}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className={cl.features}>
                    <div className={cl.blockTitle}>Особености проекта:</div>
                    <div className={cl.featuresList}>
                        { features.map((feature, index) => (
                                <>
                                    <span className={cl.featureItem}>{feature}</span>
                                    { index + 1 < features.length ? <span> | </span> : ""}
                                </>
                            ))
                        }
                    </div>
                </div>

                <div className={cl.tech}>
                    <div className={cl.blockTitle}>Используемые технологии:</div>
                    <div className={cl.techBox}>
                        { technologies.map(tech => (<Badge content={tech} size={match} />)) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalProject;
