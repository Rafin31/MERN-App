
import React, { useState } from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt, FaBox, FaSignOutAlt, FaPhoneAlt, FaFax, FaAddressBook, FaClock, FaSignInAlt } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs'


const Header = () => {


    const [expanded, setExpanded] = useState(false);
    return (
        <div>
            <div className="upper__header">
                <div className="container upper__header__container">
                    <div className="left">
                        <span className='me-3 d-block d-lg-inline'><FaPhoneAlt /> +880 1860958541</span>
                        <span className='me-3 d-block d-lg-inline'><FaFax /> +880 1860958541</span>
                    </div>
                    <div className="right">
                        <span className='me-3 d-block d-lg-inline'><FaAddressBook /> 58/2 Shantinagar, Dhaka</span>
                        <span className='me-3 d-block d-lg-inline'><FaClock /> 9:00 AM - 7:00 PM</span>
                    </div>
                </div>
            </div>
            <Navbar expand="lg" bg="transparent" variant="light" expanded={expanded} >
                <Container>
                    <Navbar.Brand as={Link} to='/' >
                        <img className='w-25' src='Assets/logo.png' alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}>
                        <span className="toggler-button toggler-button-top"></span>
                        <span className="toggler-button toggler-button-middle"></span>
                        <span className="toggler-button toggler-button-bottom"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav mx-auto">
                        <Nav className="mx-auto text-center">
                            <NavLink onClick={() => setExpanded(false)} to="/">Home</NavLink>
                            <NavLink onClick={() => setExpanded(false)} to="/About">About us</NavLink>
                            <NavLink onClick={() => setExpanded(false)} to="/products">Products</NavLink>
                            <NavLink onClick={() => setExpanded(false)} to="/location">Location</NavLink>
                            <NavLink onClick={() => setExpanded(false)} to="/contact">Contact Us</NavLink>
                        </Nav>
                        {/* <Nav className='align-items-center' >
                            <span><img src={'Assets/user-avatar.png'} alt="" srcset="" /></span>
                            <NavDropdown className='text-center' title="User" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"> <FaUserAlt /> Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> <FaBox /> Inventory</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><BsFillGearFill /> Manage Products</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"><FaSignOutAlt /> Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav> */}
                        <button className='customButton d-lg-inline d-block mx-auto '> <FaUserAlt />  Sign in</button>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
};

export default Header;