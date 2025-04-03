import React from 'react';
import cl from "./ModalError.module.scss";
import ErrorIamge from "../../../assets/img/warning.svg";

const ModalError = ({ data }) => {
    return (
        <div className={cl.box}>
            <div className={cl.top}>
                <img className={cl.img} src={ErrorIamge} alt="" />
                <span className={cl.title}>{data.title}</span>
            </div>
            <div className={cl.description}>{data.description}</div>
        </div>
    );
}

export default ModalError;