import React from 'react';
import cl from "./Statistic.module.scss";
import Title from '../shared/Title/Title';
import TargetIcon from "../../assets/img/target.svg";
import UsersIcon from "../../assets/img/users.svg";
import EducationIcon from "../../assets/img/education.svg";
import CodeIcon from "../../assets/img/code.svg";
import CountUp from 'react-countup';

const Statistic = () => {

    return (
        <div className={cl.wrapper} id="statisticblock">
            <Title title="Моя статистика" text="Статистика" />
            <div className={cl.box}>

                <div className={cl.item}>
                    <img src={EducationIcon} alt="Картинка обучение" />
                    <CountUp
                        start={0}
                        end={3}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                    >
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className={cl.count}></span>
                                <span>+</span>
                            </div>
                        )}
                    </CountUp>
                    <div className={cl.title}>лет обучения</div>
                </div>

                <div className={cl.item}>
                    <img src={CodeIcon} alt="Картинка кода" />
                    <CountUp
                        start={0}
                        end={10000}
                        duration={1.2}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                    >
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className={cl.count}></span>
                                <span>+</span>
                            </div>
                        )}
                    </CountUp>
                    <div className={cl.title}>строчек кода</div>
                </div>

                <div className={cl.item}>
                    <img src={TargetIcon} alt="Картинка успешных проектов" />
                        <CountUp
                            start={0}
                            end={15}
                            duration={2.5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        >
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} className={cl.count}></span>
                                    <span>+</span>
                                </div>
                            )}
                        </CountUp>
                    <div className={cl.title}>успешных проектов</div>
                </div>

                <div className={cl.item}>
                    <img src={UsersIcon} alt="Картинка пользователей" />
                        <CountUp
                            start={0}
                            end={15}
                            duration={2.2}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        >
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} className={cl.count}></span>
                                    <span>+</span>
                                </div>
                            )}
                        </CountUp>
                    <div className={cl.title}>счастливых клиентов</div>
                </div>

            </div>
        </div>
    );
}

export default Statistic;