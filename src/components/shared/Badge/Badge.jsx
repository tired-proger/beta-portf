import React from 'react';
import cl from "./Badge.module.scss";

const Badge = ({ content, size }) => {
    return (
        <div className={`${cl.badge} ${size ? cl.small : ""}`}>
            {content}
        </div>
    );
}

export default Badge;