import React from 'react';
import Logo from '@/assets/img/lp_logo_1_1706041538__38057.webp';
import Flag from '@/assets/img/australian-flag-icon.jpg';
import '@/assets/scss/components/Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="info">
                <img className="logo me-4 mb-3" src={Logo} />

                <div className="footer-info mx-5">
                    <div className="d-flex text-white mb-3 f-13">
                        <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                        110 Melrich Rd, Suite 4 Cranbury , NJ 08512 United States Of America
                    </div>
                    <div className="d-flex text-white mb-3 f-13">
                        <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                        (609) 655-3700
                    </div>
                    <div className="d-flex text-white f-13 bold">
                        <img className="flag me-2" src={Flag} />
                        For Our Australian Customers
                    </div>
                </div>

                <div className="information bold mx-5">
                    <h6 className="capslock text-white">categories</h6>
                    <a href="">New!</a>
                    <a href="">Dog</a>
                    <a href="">Cat</a>
                </div>

                <div className="information bold mx-5">
                    <h6 className="capslock text-white">information</h6>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Contact Us</a>
                    <a href="">Stor Locator</a>
                    <a href="">Team & Conditions</a>
                    <a href="">Contact Us</a>
                </div>

                <div className="information bold mx-5">
                    <h6 className="capslock text-white">Brand</h6>
                    <a href="">Dolce</a>
                    <a href="">Bella Bowls</a>
                    <a href="">Nature Choice</a>
                    <a href="">Pure Buffalo</a>
                    <a href="">Gorumet</a>
                    <a href="">Active Pets</a>
                </div>
            </div>

            <div className="payment mt-4 text-white">
                <div className="payment-icons f-25">
                    <i className="bi bi-paypal me-4"></i>
                    <i className="bi bi-credit-card-fill me-4"></i>
                    <i className="bi bi-google-play me-4"></i>
                    <i className="bi bi-apple"></i>
                </div>
                <a>© 2024 Shop LP</a>
            </div>
        </div>
    )
}

export default Footer;