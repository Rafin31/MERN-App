import React from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaUserAlt } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-12 banner-container">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider__banner slider__banner__1">
                                            <div className="banner__text">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-12" data-aos="fade-up">
                                                        <h1>Welcome To Organic Food</h1>
                                                        <p>Live Organic !</p>
                                                        <Link className='customButtonNoHover'
                                                            to='/login'> <FaUserAlt /> Sign In</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider__banner slider__banner__2">
                                            <div className="banner__text">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-12">
                                                        <h1>1000+ Authentic Organic Food</h1>
                                                        <p>Explore Now</p>
                                                        <Link className='customButtonNoHover'
                                                            to='/login'> <FaUserAlt /> Sign In</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider__banner slider__banner__3">
                                            <div className="banner__text">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-12">
                                                        <h1>Our customer is our main Priority </h1>
                                                        <p>Explore Now</p>
                                                        <Link className='customButtonNoHover'
                                                            to='/login'> <FaUserAlt /> Sign In</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;