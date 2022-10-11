import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banar from '../Banar/Banar';
import logo from '../../images/icon.png'

const Header = () => {
    return (
        <div>
            <Navbar className='fixed-top' bg="dark" variant="dark">
                <Container>
                    <nav>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <NavbarBrand className='m-2'>Play Quiz</NavbarBrand>
                    </nav>

                    <Nav className=" nav-item justify-content-end">
                        <Link className='nav-link' to='/'>Topics</Link>
                        <Link className='nav-link' to='/statistics'>Statistics</Link>
                        <Link className='nav-link' to='/blog'>Blog</Link>
                    </Nav>
                </Container>
            </Navbar>

            <Banar></Banar>
        </div>


    );
};

export default Header;