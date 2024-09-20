import React, { useEffect } from 'react';
import Banner from '@/components/Landing/Banner';
import BannerItems from '@/contents/BannerItems';
import Products from '@/components/Landing/Products';
import ProductsItems from '@/contents/ProductsItems';
import NewsLetter from '@/components/Landing/NewsLetter';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getDataRequest } from '@/actions/App';
import '@/assets/scss/views/Landing.scss';

const Landing: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.app.products);
    console.log("dddddddd", products);
    
    useEffect(() => {
        dispatch(getDataRequest());
    }, []);

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
            <NewsLetter />
        </div>
    )
}

export default Landing;