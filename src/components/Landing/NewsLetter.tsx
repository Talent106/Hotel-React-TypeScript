import React from 'react';
import Img from '@/assets/img/dog.webp';
import '@/assets/scss/components/Landing/NewsLetter.scss';

const NewsLetter: React.FC = () => {
    return (
        <div className="newsletter">
            <h3 className="bold capslock me-4">Newsletter Signup</h3>
            <div className="input-group mx-4">
                <input type="text" className="form-control" placeholder="Email Address*" />
                <div className="input-group-append">
                    <button className="btn btn-danger capslock bold" type="button">
                        Subscribe
                    </button>
                </div>
            </div>
            <img src={Img} />
        </div>
    )
}

export default NewsLetter;