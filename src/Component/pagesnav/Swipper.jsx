import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import comm from "../../img/blogdetails/comment.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Swipper() {
  return (
    <>
      <Swiper
        dir="rtl"
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
          loop={true}
      >
        <SwiperSlide>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <div className="info">
              <div>
                <h5>John Deo</h5>
                <p>patient</p>
              </div>
              <img src={comm} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <div className="info">
              <div>
                <h5>John Deo</h5>
                <p>patient</p>
              </div>
              <img src={comm} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <div className="info">
              <div>
                <h5>John Deo</h5>
                <p>patient</p>
              </div>
              <img src={comm} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <div className="info">
              <div>
                <h5>John Deo</h5>
                <p>patient</p>
              </div>
              <img src={comm} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <FontAwesomeIcon icon={faQuoteLeft} />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
              ssuspendisse ultrices gravida.
            </p>
            <div className="info">
              <div>
                <h5>John Deo</h5>
                <p>patient</p>
              </div>
              <img src={comm} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
