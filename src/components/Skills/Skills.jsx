import React, { useContext, useEffect, useRef } from 'react';
import cl from "./Skills.module.scss";
import Title from '../shared/Title/Title';
import Skill from './Skill/Skill';
import Button from '../shared/Button/Button';
import { modalContext } from '../../store/ModalContext';
import { scrollContext } from '../../store/ScrollContext';

const skillList = [
    { id: 1, text: "HTML", percent: 97 },
    { id: 2, text: "CSS", percent: 94 },
    { id: 3, text: "JavaScript", percent: 87 },
    { id: 4, text: "React", percent: 83 },
    { id: 5, text: "NodeJs", percent: 74 }
]

const Skills = () => {

    const listElementRef = useRef(null);
    const { setModalData } = useContext(modalContext);
    const { scrollState, observer } = useContext(scrollContext);

    useEffect(() => {
        observer.observe(listElementRef.current);
    }, []);

    return (
        <React.Fragment>
            <div className={cl.wrapper} id="skillsblock">
                <Title title="Мои навыки" text="Мои навыки" />
                <div className={cl.box} ref={listElementRef} id="scrollAnimationBlock">
                    {
                        skillList.map(el => (
                            <Skill 
                                id={el.id} 
                                text={el.text} 
                                percent={el.percent} 
                                isAnimate={scrollState.skillsBlockVisible} 
                                animDelay={(el.id - 1) * 0.1}
                            />
                        ))
                    }
                </div>
                <div className={cl.bottom}>
                    <Button 
                        clickHandler={() => setModalData({ isOpen: true, isVisible: true, type: "skills", data: [] })} 
                        isHover={true}
                    >
                        Подробнее
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Skills);