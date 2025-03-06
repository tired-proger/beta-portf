import React from 'react';
import cl from "./Title.module.scss";

const Title = ({ title, text }) => {
    return (
        <div className={cl.top}>
            <h2 className={cl.title}>{title}</h2>
            <h3 className={cl.text}>{text}</h3>
        </div>
    );
}

export default Title;
