import React, { useContext } from "react";
import userContext from "../../Contexts/AuthContext";
import data from "../../DataSource";
import {
  AboutSection,
  ClientCounter,
  ProductCard,
  ValueSection,
} from "../../Utilities/Utilities";
import "./Home.css";
const Home = () => {
  const { user } = useContext(userContext);
  console.log(user);
  const landingPageData = data.slice(0, 3);
  return (
    <div className="HomePage">
      <ValueSection />

      <div className="CoursesBrief">
        <h1>Resent Courses</h1>
        <div className="CourseBriefContainer">
          {landingPageData.map((ele, indx) => (
            <ProductCard {...ele} id={indx} key={indx} />
          ))}
        </div>
      </div>
      <AboutSection />
      <ClientCounter />
    </div>
  );
};

export default Home;
