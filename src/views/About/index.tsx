import React from "react";
import Story from "./Story";
import QualityControl from "./Quality";
import NewsLetter from "@/components/Landing/NewsLetter";
import '@/assets/scss/views/About/AboutUs.scss';

const AboutUs: React.FC = () => {
    return (
        <div className='about_us'>
            <Story />
            <QualityControl />
            <NewsLetter />
        </div>
    )
}

export default AboutUs;