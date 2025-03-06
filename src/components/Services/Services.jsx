import React, { useContext, useRef, useEffect, useMemo } from 'react';
import cl from "./Services.module.scss";
import Title from '../shared/Title/Title';
import { scrollContext } from '../../store/ScrollContext';
import { servicesList } from '../../data/data';


const Services = () => {
    
    const { scrollState, observer } = useContext(scrollContext);
    const servicesListRender = servicesList.map(el => { return el.ref ? el : { ...el, ref: useRef(null) }});

    useEffect(() => {
        servicesListRender.forEach((service) => {
            observer.observe(service.ref.current);
        });
    }, []);

    return (
        <div className={cl.wrapper} id="servicesblock">
            <Title title="Мои услуги" text="Мои услуги" />
            <div className={cl.box}>
                {
                    servicesListRender.map(service => (
                        <div 
                            key={service.id} 
                            className={`${cl.item} ${scrollState.servicesBlockVisible[service.id] ? cl.active : ""}`} 
                            ref={service.ref} 
                            id={`service_card_${service.id}`}
                            style={{
                                transitionDelay: `${(service.id - 1) * 0.2}s`
                            }}
                        >
                            <img src={service.img} alt="" className={cl.webImg} />
                            <h3 className={cl.title}>{service.title}</h3>
                            <div className={cl.text}>{service.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
