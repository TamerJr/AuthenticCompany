import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <>
    <h1> Who We Are</h1>
    <section className="AboutUsSection">
      <div className="DiscriptionBreif">
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel
          veritatis cupiditate rem neque reprehenderit natus ratione aut,
          necessitatibus numquam nihil sunt amet sapiente omnis repudiandae
          dolores magnam pariatur voluptatum laboriosam quis. Cum quasi itaque
          ipsum fuga iure ipsa alias?
        </p>
        <button className="MoreAboutUs">
          <Link to="aboutus">More</Link>
        </button>
      </div>
      <img src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Consulting" title="Consulting"/>
    </section>
    </>
  );
};

export default AboutSection;
