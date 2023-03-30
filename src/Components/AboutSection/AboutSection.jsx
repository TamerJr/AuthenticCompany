import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <>
      <h1> Who We Are</h1>
      <section className="AboutUsSection">
        <div className="DiscriptionBreif">
          <p>
            {" "}
            Welcome to <b>Auhentic</b> where we share information related to
            Life Coaching. We're dedicated to providing you the very best
            information and knowledge of the above mentioned topics .
          </p>
          <p>
            We hope you found all of the information on <b>Auhentic</b> helpful,
            as we love to share them with you.
          </p>

          <p>
            If you require any more information or have any questions about our
            site, please feel free to contact us by email at{" "}
            <b>ahmttmer@gmail.com</b>.
          </p>
          <button className="MoreAboutUs">
            <a href="#">More</a>
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&"
          alt="Consulting"
          title="Consulting"
          className="AboutUsImg"
        />
      </section>
    </>
  );
};

export default AboutSection;
