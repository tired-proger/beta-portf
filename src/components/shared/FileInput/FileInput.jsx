import React, { useRef } from 'react';
import cl from "./FileInput.module.scss";
import GlobalSvgSelector from '../../../utils/globalSvgSelector';

const FileInput = ({ isImage, addFileHandler, extensions, isLoading }) => {

    const inputRef = useRef(null);

    const clickHandler = () => {
        inputRef.current.click();
    }

    const chooseFileHandler = (e) => { 
        addFileHandler(e.target.files[0]);
    }

    return (
        <div className={cl.box}>
            <input 
                onChange={chooseFileHandler} 
                type="file" 
                className={cl.input} 
                ref={inputRef} 
                accept={extensions ? extensions.join(", ") : ""} 
                disabled={isLoading}
            />
            <button onClick={clickHandler} className={ isLoading ? `${cl.button} ${cl.loading}` : cl.button } disabled={isLoading}>
                { isImage && <GlobalSvgSelector svgname="fileIconSvg" className={cl.image} /> }
                <span>Добавить файл</span>
            </button>
        </div>
    );
}

export default FileInput;
