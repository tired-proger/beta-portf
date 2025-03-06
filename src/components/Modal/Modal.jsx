import React, { useContext, useEffect, useState } from 'react';
import cl from "./Modal.module.scss";
import ModalSkills from './ModalSkills/ModalSkills';
import ModalProject from './ModalProject/ModalProject';
import {modalContext} from '../../store/ModalContext';
import Button from '../shared/Button/Button';

const Modal = () => {

    const { modalData, setModalData } = useContext(modalContext);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {

        if (modalData.isVisible) {
            setIsAnimated(true);
        } else {
            setIsAnimated(false);
            setTimeout(() => setModalData({ ...modalData, isOpen: false }), 300);
        }

    }, [modalData.isVisible]);

    //work after hide modal animation
    if (!modalData.isOpen) return null;

    const closeHandler = () => setModalData({ ...modalData, isVisible: false });

    return (
        <div className={`${cl.overlay} ${isAnimated ? cl.active : ""}`}>
            <div className={cl.modal}>

                { modalData.type === "skills" && <ModalSkills /> }
                { modalData.type === "project" && <ModalProject data={modalData.data} /> }
                { modalData.type === "form" && <ModalForm data={modalData.data} /> }

                <div className={cl.footer}>
                    <Button size="small" clickHandler={closeHandler} isHover={true}>Закрыть</Button>
                </div>
    
            </div>
        </div>
    );
};

export default Modal;
