import React from 'react';
import Banner from '@/components/Landing/Banner';
import BannerItems from '@/contents/BannerItems';
import Products from '@/components/Landing/Products';
import ProductsItems from '@/contents/ProductsItems';
import '@/assets/scss/views/Landing.scss';

const Landing: React.FC = () => {
    return (
        <div className="landing">
            <div className="carousel">
                <div className="content-wrapper">
                    <div className="content">
                        <div className="title">USA Made Treats for Dogs</div>
                        <div className="discription mt-4">
                            Real Meat, Simple Ingredients. Made right here in the USA.
                            Explore our wide variety of treats all lovingly prepared with extraordinary attention to detail.
                        </div>
                        <button className="btn btn-danger mt-4" type="button">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

            <Banner BannerItems={BannerItems} />
            <Products ProductsItems={ProductsItems} />
        </div>
    )
}

export default Landing;