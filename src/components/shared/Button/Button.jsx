import React, { forwardRef } from 'react';
import cl from"./Button.module.scss";
import LoaderImage from "../../../assets/img/loader.svg";

const Button = forwardRef((props, ref) => {

    const {
        children, 
        clickHandler, 
        size, 
        isHover, 
        isSelected, 
        isDisabled, 
        isLoading, 
        type, 
        id,
        onAnimate,
        isAnimating,
        style
    } = props;

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
                ${onAnimate ? cl.animate : ""}
                ${isAnimating ? cl.animating : ""}
            `}
            style={style}
            ref={ref}
            id={id}
            onClick={clickHandler}
            disabled={isDisabled}
        >
            <span className={cl.item}>
                {
                    isLoading ? (
                        <>
                            <img src={LoaderImage} />
                            <span>{children}</span>
                        </>
                    ) : <span>{children}</span>
                }
            </span>
        </button>
    );
});

export default Button;
