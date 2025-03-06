import React from 'react';
import cl from "./Skill.module.scss";

const Skill = ({ text, percent, id, isAnimate, animDelay}) => {

    const getPercentValue = () => {
        if (isAnimate) {
            let percentValue = percent * 439.6 / 100;
            percentValue = 439.6 - percentValue;
            percentValue = Number(percentValue.toFixed(2));
            return percentValue;
        } else { return 439.6; }
    }

    return (
        <div key={id} className={cl.skill}>
            <div className={cl.bar}>
                <div className={cl.barText}>{percent}%</div>
                <svg width="160" height="160" viewBox="0 0 160 160" style={{"transform": "rotate(-90deg)"}}>
                    <circle r="70" cx="80" cy="80" fill="#171717" stroke="#171717" strokeWidth="12px"></circle>
                    <circle 
                        className={cl.animBar}
                        r="70" 
                        cx="80" 
                        cy="80" 
                        fill="transparent" 
                        stroke="#d3992e" 
                        strokeLinecap="round" 
                        strokeWidth="12px" 
                        strokeDasharray="439.6px"
                        strokeDashoffset={getPercentValue() + "px"}
                        style={{
                            transitionDelay: `${animDelay}s`
                        }}
                    ></circle>
                </svg>
            </div>
            <h3 className={cl.skillText}>{text}</h3>
        </div>
    );
};

export default React.memo(Skill);
