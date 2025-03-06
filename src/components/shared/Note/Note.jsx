import React from 'react';
import cl from "./Note.module.scss";
import QuestionImage from "../../../assets/img/question.svg";

const Note = ({ setImage, children, size, styles }) => {
    return (
        <div className={`${cl.note} ${size === "small" ? cl.noteSmall : ""}`} style={styles}>
            {setImage && <img className={cl.noteImg} src={QuestionImage} alt="note image" />}
            <div className={cl.noteText}>{children}</div>
        </div>  
    );
}

export default Note;
