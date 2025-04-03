import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SliderArrow from "../../../../assets/img/slider-arrow.svg";
import 'swiper/css';
import "../../../../slider.scss";

const ModalProjectSlider = ({ imgList }) => {
    return (
        <div className="sliderWrapperClass">
            
            <Swiper
                allowTouchMove={false}
                loop={true}
                draggable={false}
                autoHeight={false}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    enabled: true,
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                    disableOnInteraction: true,
                    delay: 5000,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    imgList.map(img => (
                        <SwiperSlide>
                            <img className="sliderImageClass" src={img} alt="img" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <button className="swiper-button-prev">
                <img src={SliderArrow} alt="" />
            </button>
            <button className="swiper-button-next">
                <img src={SliderArrow} alt="" />
            </button>

        </div>
    )
}

export default ModalProjectSlider;
