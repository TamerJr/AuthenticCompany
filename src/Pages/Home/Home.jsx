import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../Contexts/AuthContext";
import {
  ClientCounter,
  ProductCard,
  ValueSection,
} from "../../Utilities/Utilities";
const Home = () => {
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div>
      <ValueSection />
      <ProductCard />
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel
          veritatis cupiditate rem neque reprehenderit natus ratione aut,
          necessitatibus numquam nihil sunt amet sapiente omnis repudiandae
          dolores magnam pariatur voluptatum laboriosam quis. Cum quasi itaque
          ipsum fuga iure ipsa alias?
        </p>
        <button>
          <Link to="aboutus">More</Link>
        </button>
      </section>
      <ClientCounter />
    </div>
  );
};

export default Home;
