import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer container-fluid">
                <div className="container" data-aos="fade-up">

                    <div className="row justify-content-center " >
                        <div className="col-12 col-lg-2 col-md-2">
                            <p className="footer_heading">Market</p>
                            <p className="footer__link"><Link to={"/"}>Become an affiliate</Link></p>
                            <p className="footer__link"><Link to={"/"}>Market API</Link></p>
                            <p className="footer__link"><Link to={"/"}>Licenses</Link></p>
                            <p className="footer__link"><Link to={"/"}>Terms</Link></p>
                        </div>
                        <div className="col-12 col-lg-2 col-md-2">
                            <p className="footer_heading">Help</p>
                            <p className="footer__link"><Link to={"/"}>Authors</Link></p>
                            <p className="footer__link"><Link to={"/"}>Help Center</Link></p>
                        </div>
                        <div className="col-12 col-lg-2 col-md-2">
                            <p className="footer_heading">Our Community</p>
                            <p className="footer__link"><Link to={"/"}>Blog</Link></p>
                            <p className="footer__link"><Link to={"/"}>About Envato</Link></p>
                            <p className="footer__link"><Link to={"/"}>Forums</Link></p>
                            <p className="footer__link"><Link to={"/"}>Meetups</Link></p>
                        </div>
                        <div className="col-12 col-lg-2 col-md-2">
                            <p className="footer_heading">About Us</p>
                            <p className="footer__link"><Link to={"/"}>About Envato</Link></p>
                            <p className="footer__link"><Link to={"/"}>Careers</Link></p>
                            <p className="footer__link"><Link to={"/"}>Privacy Policy</Link></p>
                            <p className="footer__link"><Link to={"/"}>Sitemap</Link></p>
                        </div>
                        <div className="col-12 col-lg-2 col-md-2">
                            <img src="Assets/logo.png" alt="logo" className="footer__img w-75 mb-3" />

                            <div className="row">
                                <div className="col-6 col-md-12 col-lg-6">

                                    <p className="number">10,256,258</p>
                                    <p className="footer_subheading">Item Sold </p>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="number">$5,500,000</p>
                                    <p className="footer_subheading">Profit </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="footer_hr" />

                    <div className="row copyright__wrapper">
                        <div className="col-6 col-lg-6 col-md-6">
                            <p className="copyright">© {new Date().getFullYear()} Asif H Rafin</p></div>
                        <div className="col-6 col-lg-6 col-md-6">
                            <div className="socialLinks">
                                <span className="me-2"><FaFacebook /></span>
                                <span className="me-2"><FaInstagram /></span>
                                <span className="me-2"><FaLinkedin /></span>
                                <span className="me-2"><FaYoutube /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;