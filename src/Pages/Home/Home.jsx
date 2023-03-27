import React, { useContext } from "react";
import userContext from "../../Contexts/AuthContext";
import {
  AboutSection,
  ClientCounter,
  ProductCard,
  ValueSection,
} from "../../Utilities/Utilities";
import "./Home.css"
  const Home = () => {
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div className="HomePage">
      <ValueSection />
      <ProductCard />
      <AboutSection />
      <ClientCounter />
    </div>
  );
};

export default Home;
