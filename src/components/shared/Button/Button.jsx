import React from 'react';
import cl from"./Button.module.scss";

const Button = ({ children, clickHandler, size, isHover, isSelected, isDisabled, isLoading, type}) => {

    if (type === "link") {
        return (
            <a 
                className={`
                    ${cl.btn} 
                    ${isHover ? cl.hover : ""} ${isSelected ? cl.selected : ""}
                `} 
                href="#contactsblock"
            >
                {children}
            </a>
        )
    }

    return (
        <button
            className={`
                ${cl.btn} 
                ${size === "small" ? cl.small : ""} 
                ${isHover ? cl.hover : ""} ${isSelected ? cl.selected : ""}
                ${isDisabled ? cl.disabled : ""}
                ${isLoading ? cl.loading : ""}
            `}
            onClick={clickHandler}
        >
            <span className={cl.item}>
                {children}
            </span>
        </button>
    );
}

export default Button;
