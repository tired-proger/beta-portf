import React from 'react';
import cl from "./Badge.module.scss";

const Badge = ({ content }) => {
    return (
        <div className={cl.badge}>
            {content}
        </div>
    );
}

export default Badge;
