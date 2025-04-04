import { useEffect, useRef } from "react";
import cl from "./Hero.module.scss";
import Typed from "typed.js";
import Button from "../shared/Button/Button";

const Hero = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: [
            "Веб приложений",
            "Сайтов под ключ",
            "Ботов",
            "Парсеров",
          ],
          startDelay: 300,
          typeSpeed: 70,
          backSpeed: 70,
          backDelay: 150,
          loop: true,
        });
    
        // Destroying
        return () => {
          typed.destroy();
        };
    }, []);

    const oneTimeScrollHandler = () => {
        document.documentElement.scrollTo(0, window.innerHeight * 0.65);
    }

    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.info}>
                    <div className={cl.top}>Привет, меня зовут</div>
                    <h1 className={cl.mainText}>Цаплин Матвей</h1>
                    <div className={cl.animText}>Я разработчик <span className={cl.span} ref={el}></span></div>
                    <div className={cl.boxText}>
                        <div>
                            Если Вам нужен ответственный, опытный, доводящий до конца результат разработчик проектов различной сложности, то Вы находитесь на нужном сайте, листайте ниже и ознакамливайтесь с моими услугами
                        </div>
                        <div style={{ marginTop: "8px" }}>
                            Буду рад поработать с Вами!
                        </div>
                    </div>
                    <Button type="link" isHover={true}>Мои контакты</Button>
                </div>
                <div className={cl.box}>
                    <div className={cl.image}>
                        <div 
                            className={cl.imageInner}
                            style={{
                                backgroundImage: `url(./image.jpg)`
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <button onClick={oneTimeScrollHandler} className={cl.mouse}></button>
        </>
    );
}

export default Hero;
