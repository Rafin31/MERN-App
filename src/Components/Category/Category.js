import React from 'react';
import './Category.css'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Category = () => {
    return (
        <>

            <section className="category__section ">

                <div className="container">
                    <div className="row gy-3 justify-content-center align-items-center">

                        <div className="title__wrapper">
                            <p className="small__title">100+ Categories </p>
                            <p className="large__title">Categories</p>

                        </div>

                        <div className="col-6 col-lg-2 col-md-6">
                            <div className="category__wrapper">
                                <div className="card shadow-sm rounded">
                                    <img className='mx-auto' src="Assets/icons/external-products-customer-feedback-flaticons-lineal-color-flat-icons.png" alt="products" />

                                    <p className="category__heading">Category-1</p>
                                    <p className="category__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda accusantium labore similique repudiandae ea?</p>
                                    <a className='category__visiting__link' href="/">Explore <FaLongArrowAltRight /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-6">
                            <div className="category__wrapper">
                                <div className="card shadow-sm rounded">
                                    <img className='mx-auto' src="Assets/icons/external-products-medical-ecommerce-flaticons-lineal-color-flat-icons-2.png" alt="products" />

                                    <p className="category__heading">Category-1</p>
                                    <p className="category__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda accusantium labore similique repudiandae ea?</p>
                                    <a className='category__visiting__link' href="/">Explore <FaLongArrowAltRight /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-6">
                            <div className="category__wrapper">
                                <div className="card shadow-sm rounded">
                                    <img className='mx-auto' src="Assets/icons/external-products-online-shopping-linector-lineal-color-linector.png" alt="products" />

                                    <p className="category__heading">Category-1</p>
                                    <p className="category__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda accusantium labore similique repudiandae ea?</p>
                                    <a className='category__visiting__link' href="/">Explore <FaLongArrowAltRight /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-6">
                            <div className="category__wrapper">
                                <div className="card shadow-sm rounded">
                                    <img className='mx-auto' src="Assets/icons/external-products-skincare-flaticons-flat-flat-icons.png" alt="products" />

                                    <p className="category__heading">Category-1</p>
                                    <p className="category__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda accusantium labore similique repudiandae ea?</p>
                                    <a className='category__visiting__link' href="/">Explore <FaLongArrowAltRight /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 col-md-6">
                            <div className="category__wrapper">
                                <div className="card shadow-sm rounded">
                                    <img className='mx-auto' src="Assets/icons/external-products-skincare-flaticons-lineal-color-flat-icons-2.png" alt="products" />

                                    <p className="category__heading">Category-1</p>
                                    <p className="category__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda accusantium labore similique repudiandae ea?</p>
                                    <a className='category__visiting__link' href="/">Explore <FaLongArrowAltRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Category;