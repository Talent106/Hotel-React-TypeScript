import React from "react";
import ad_img from '@/assets/img/about-hero-banner.webp';

const Story: React.FC = () => {
    return (
        <div className="our_story">
            <img className="ad_img" src={ad_img} />
            <div className="context p-4">
                <h1 className="bold capslock f-60">Our Story</h1>
                <p className="f-20 mt-4 w-70">
                    Welcome to Loving Pets – where every tail wag tells a story of love and care! Our journey began in 2005 when Eric and Shane, fueled by their passion for pets, embarked on a mission to revolutionize the pet industry. But our story goes back even further – Eric, a proud third-generation pet industry member, inherited his love for furry companions from his grandfather, one of the visionary founding members of the APPA.

                    Nestled in the heart of Cranbury, NJ, our headquarters serves as the bustling hub of creativity and innovation. Here, under one roof, we weave dreams into reality, with manufacturing, warehousing, and packaging working seamlessly together. And just like a pet with multiple toys, we believe in redundancy – our additional production facilities nearby ensure uninterrupted supply, because every pet deserves a treat!
                </p>
                <a className="bold text-danger f-20" href="">Read More +</a>
            </div>
        </div>
    )
}

export default Story;