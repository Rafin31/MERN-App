
import React, { useState } from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt, FaBox, FaSignOutAlt, FaPhoneAlt, FaFax, FaAddressBook, FaClock, FaPlus } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { BsFillGearFill } from 'react-icons/bs'
import auth from '../../firebase.init';


const Header = () => {

    const [user, loading] = useAuthState(auth);

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        signOut(auth)
    }


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
                    <Navbar.Collapse id="responsive-navbar-nav mx-auto navbarLinks">
                        <Nav className="mx-auto text-center">
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/">Home</NavLink>
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/category">Category</NavLink>
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/items">Items</NavLink>
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/location">Location</NavLink>
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/About">About us</NavLink>
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/blog">Blog</NavLink>
                            <NavLink onClick={() => setExpanded(false)} className="me-3" to="/contact">Contact Us</NavLink>
                        </Nav>

                        {

                            loading ?
                                <>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </> :

                                user ? <>
                                    <Nav className='align-items-center' >
                                        <span><img className=' userImgHeader rounded-circle w-50 ms-auto d-block' src={user.photoURL ? user.photoURL : 'Assets/user-avatar.png'} referrerpolicy="no-referrer" alt="userImg" srcset="" /></span>


                                        <NavDropdown className='text-center'
                                            title={user.desiplayName == null ? user.email.split("@")[0] : user.desiplayName}


                                            id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="/"> <FaUserAlt /> Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="/myItems"> <FaBox /> My Items</NavDropdown.Item>

                                            <NavDropdown.Item href="/addItem"> <FaPlus /> Add Items</NavDropdown.Item>

                                            <NavDropdown.Item href="/manageInventories"><BsFillGearFill /> Manage Products</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href=" " onClick={handleLogout}><FaSignOutAlt /> Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>

                                </> :
                                    <Link className='customButton signinButton d-lg-inline d-block mx-auto text-center '
                                        to='/login'> <FaUserAlt /> Sign In</Link>
                        }
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
};

export default Header;