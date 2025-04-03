import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../shared/Button/Button';
import cl from "./WorksTab.module.scss";
import { buttonList } from '../../../data/data';
import { scrollContext } from '../../../store/ScrollContext';
import { getMatchMediaQuery } from '../../../utils/getMatchMediaQuery';

const match = getMatchMediaQuery(400);

const WorksTab = ({ clickHandler, workType }) => {

    const [isDisableDelay, setIsDisableDelay] = useState(false);
    const { scrollState: { worksBtnBlockVisible }, observer } = useContext(scrollContext);
    const buttonListRender = buttonList.map(el => { return el.ref ? el : { ...el, ref: useRef(null) } });

    useEffect(() => {
        buttonListRender.map(el => observer.observe(el.ref.current));
    }, []);

    //disabling delay after tab animation
    useEffect(() => {
        if (Object.values(worksBtnBlockVisible).every(el => !!el)) {
            setTimeout(() => setIsDisableDelay(true), 1000);
        }
    }, [worksBtnBlockVisible]);

    return (
        <div className={cl.tabs}>
            {
                buttonListRender.map(data => (
                    <Button 
                        key={data.id}
                        isHover={true} 
                        isSelected={workType === data.type}
                        ref={data.ref}
                        id={`work_btn_${data.id}`}
                        clickHandler={() => clickHandler(data.type)}
                        onAnimate={true}
                        isAnimating={worksBtnBlockVisible[data.id]}
                        size={match ? "small" : null}
                        style={
                            { 
                                transitionDelay: isDisableDelay ? "0s" : `${(data.id - 1) * 0.12}s`,
                                transitionDuration: isDisableDelay ? "" : "0.2s",
                                transitionTimingFunction: isDisableDelay ? "" : "ease"
                            }
                        }
                    >
                        {data.text}
                    </Button>
                ))
            }
        </div>
    );
}

export default WorksTab;