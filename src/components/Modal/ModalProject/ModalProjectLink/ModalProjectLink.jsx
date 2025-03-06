import React from 'react';
import cl from "./ModalProjectLink.module.scss";
import GlobalSvgSelector from '../../../../utils/globalSvgSelector';

const ModalProjectLink = ({ content, svgname, link, isLast }) => {
    return (
        <div>
            <a className={`${cl.linkItem} ${isLast ? cl.last : ""}`} href={link} target="_blank">
                <GlobalSvgSelector className={cl.svg} svgname={svgname} />
                <span className={cl.linkText}>{content}</span>
            </a>
        </div>
    );
}

export default ModalProjectLink;
