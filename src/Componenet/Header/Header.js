import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banar from '../Banar/Banar';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Play Quiz</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to='/'>Topics</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/blog'>Blog</Link>
                    </Nav>
                </Container>
            </Navbar>

            <Banar></Banar>
        </div>


    );
};

export default Header;