import React from 'react';
import '@/assets/scss/components/Landing/Banner.scss';

interface BannerItem {
    icon: string;
    img: string;
    title: string;
}

interface BannerProps {
    BannerItems: BannerItem[];
}

const Banner: React.FC<BannerProps> = ({BannerItems}) => {
    return (
        <div className="banners">
            {BannerItems.map((item, index) => (
                <div className="banner-x" key={index}>
                    <img className="gallery" src={item.img} />
                    <div className="round">
                        <i className={item.icon}></i>
                    </div>
                    <p>{ item.title }</p>
                </div>
            ))}
        </div>
    )
}

export default Banner;