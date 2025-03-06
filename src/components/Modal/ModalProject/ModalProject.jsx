import React from 'react';
import cl from "./ModalProject.module.scss";
import Badge from '../../shared/Badge/Badge';
import ModalProjectLink from './ModalProjectLink/ModalProjectLink';

const ModalProject = (props) => {

    let { description, link, github, technologies, features, img } = props.data;
    let linkList = [
        { link: link, content: "Ссылка на проект", svgname: "linkToProject" },
        { link: github, content: "Ссылка на код", svgname: "codeToProject" }
    ];

    return (
        <div className={cl.wrapper}>

            <div className={cl.image}>
                <img src={img} alt="" />
            </div>

            <div className={cl.info}>
                <div className={cl.titles}>
                    <div className={cl.desc}>{description}</div>
                </div>

                <div className={cl.links}>
                    <div className={cl.linksTitle}>Ссылки:</div>
                    <div className={cl.linksBox}>
                        {
                            linkList.map((data, index) => (
                                <ModalProjectLink 
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
                    <div className={cl.featuresTitle}>Особености проекта:</div>
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
                    <div className={cl.techTitle}>Используемые технологии:</div>
                    <div className={cl.techBox}>
                        { technologies.map(tech => (<Badge content={tech} />)) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalProject;
