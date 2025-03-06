import React from 'react';
import Button from '../../shared/Button/Button';
import cl from "./WorksTab.module.scss";

const buttonList = [
    { type: "all", text: "все" },
    { type: "web", text: "веб" },
    { type: "bots", text: "боты" },
    { type: "parsers", text: "парсеры" }
];

const WorksTab = ({ clickHandler, workType }) => {
    return (
        <div className={cl.tabs}>
            {
                buttonList.map(data => (
                    <Button 
                        isHover={true} 
                        isSelected={workType === data.type}
                        clickHandler={() => clickHandler(data.type)}
                    >
                        {data.text}
                    </Button>
                ))
            }
        </div>
    );
}

export default WorksTab;
