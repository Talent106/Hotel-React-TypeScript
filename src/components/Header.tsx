import React from 'react';


const Header: React.FC = () => {
    return (
        <div className="header">
            <a href="/">
                <img className="logo" src="../assets/img/lp_logo_1_1706041538__38057.webp" />
            </a>

            <div className="menu">
                <div className="top-bar">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="What are you looking for?" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
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
                        <a>About</a>
                        <a>Blog</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                    <button className="btn btn-outline-danger rounded-pill">
                        <i className="bi bi-cart3 me-2"></i>CART
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;