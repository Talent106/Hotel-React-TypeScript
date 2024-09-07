import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '@/assets/img/lp_logo_1_1706041538__38057.webp';
import '@/assets/scss/components/Header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <a href="/">
                <img className="logo" src={Logo} />
            </a>

            <div className="menu">
                <div className="top-bar">
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-info" id="button-addon2">
                            <i className="bi bi-search-heart-fill"></i>
                        </Button>
                    </InputGroup>
                    <div className="d-flex ms-4">
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        <a>Store Locator</a>
                    </div>
                    <div className="d-flex m-3">
                        <i className="bi bi-question-circle me-2"></i>
                        <a href="/contact">Help</a>
                    </div>
                    <div className="d-flex m-3">
                        <i className="bi bi-person-circle me-2"></i>
                        <a href="/login">Account</a>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="menu-btn">
                        <a>NEWS!</a>
                        <a>Dog</a>
                        <a>Cat</a>
                        <a href='/about-us'>About</a>
                        <a>Blog</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                    <Button variant="outline-danger rounded-pill" id="button-addon2">
                        <i className="bi bi-cart3 me-2"></i>CART
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;