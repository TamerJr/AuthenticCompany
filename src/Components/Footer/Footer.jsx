import React from "react";
import { ContactForm } from "../../Utilities/Utilities";
import { BsFacebook, BsQuora } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  const date = new Date();

  return (
    <section className="Footer">
      <section className="Footer-Parts">
        <div className="Footer-Components">
          <div className="ContactForm-Container">
          <ContactForm  />
            </div>
          <div className="ListsContainer">
            <div className="InfoContainer">
              <h4>Infos </h4>
              <ul className="Info-List">
                <li>Address :- </li>
                <li>Phone :- </li>
                <li>Email :- </li>
                <li>Working :- </li>
              </ul>
            </div>
            <div className="SocailsContainer">
              <ul className="Social-List">
                <li>
                  <BsFacebook size={23} />
                </li>
                <li>
                  <AiFillTwitterCircle size={23} />
                </li>
                <li>
                  <BsQuora size={23} />
                </li>
                <li>
                  <AiFillYoutube size={23} />
                </li>
                <li>
                  <AiFillInstagram size={23} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h3>©Tamer {date.getFullYear()}</h3>
      </div>
    </section>
  );
};

export default Footer;
