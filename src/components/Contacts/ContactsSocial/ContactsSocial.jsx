import React from 'react';
import cl from "./ContactsSocial.module.scss";
import TgImage from "../../../assets/img/telegram.svg";
import VkImage from "../../../assets/img/vk.svg";
import PostImage from "../../../assets/img/gmail.png";

const ContactsSocial = () => {
    return (
        <div className={cl.socials}>
            <div className={cl.socialsBox}>
                <div className={cl.title}>Написать напрямую</div>
                <div className={cl.box}>
                    <a href="https://t.me/time_for_chill" className={`${cl.socialBtn} ${cl.tg}`}>
                        <img src={TgImage} alt="tg" />
                        <span>Телеграм</span>
                    </a>
                    <a href="https://vk.com/happy_makerr" className={`${cl.socialBtn} ${cl.vk}`}>
                        <img src={VkImage} alt="" />
                        <span>Вконтакте</span>
                    </a>
                    <a href="mailto:Caplinmatvey.12345@gmail.com" className={`${cl.socialBtn} ${cl.post}`}>
                        <img src={PostImage} alt="" />
                        <span>Почта</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactsSocial;
