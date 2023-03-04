// import Slider from "infinite-react-carousel";
import arg from "../img/arg.jpg";
import aus from "../img/aus.jpg";
import aus2 from "../img/aus2.jpg";
import bra from "../img/bra.jpg";
import can from "../img/can.jpg";
import ind from "../img/ind.jpg";
import kor from "../img/kor.jpg";
import sco from "../img/sco.jpg";

import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Sliderx = () => {
    return (
        <div className="herox">
            <div className="my-slider">
                <div className="hero gallery-tops">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={5}
                        navigation
                        loop={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={(s) => {
                            console.log("s> ");
                            console.log(s);
                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        <SwiperSlide>
                            <img src={arg} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={aus} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={aus2} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={bra} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={can} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ind} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={kor} className="argimg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sco} className="argimg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Sliderx;
