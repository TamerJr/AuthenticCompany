import React, { useEffect, useRef, useState } from "react";
import "./TermsSection.css";
import { TbDirectionSignFilled } from "react-icons/tb";
import { refEqual } from "firebase/firestore";
const TermsSection = ({ name, disc}) => {
  const [toggleSection, setToggleSetion] = useState(false);
  const handleSection = () => {
    setToggleSetion(!toggleSection);
  };
  
  return (
    <section className="TermsSection">
      <span className="SectionController" onClick={handleSection}>
        <h3>{name}</h3>
        <TbDirectionSignFilled
          size={25}
          className={toggleSection ? "SectionTogglerDown" : "SectionTogglerUp"}
        />
      </span>
      <p
        className={
          toggleSection 
            ? "TermsSectionText TermsSectionDiscriptionOn"
            : "TermsSection TermsSectionDiscriptionOff"
        }
      >
        {disc}
      </p>
    </section>
  );
};

export default TermsSection;
