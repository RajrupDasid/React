import React from "react";
import "./Hero.css";
const Hero =({imageSrc}) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="Blogs" className="hero_image"/>
            <h1 className="hero_title">Responsive Web With React</h1>
        </div>
    );
};
export default Hero;