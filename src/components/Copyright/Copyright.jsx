import React from 'react';
import cl from "./Copyright.module.scss";

const Copyright = () => {
    return (
        <div className={cl.box}>
            <div className={cl.text}>© 2023-2025 <a href="https://t.me/time_for_chill" target="_blank">Telegram</a></div>
        </div>
    );
}

export default Copyright;
