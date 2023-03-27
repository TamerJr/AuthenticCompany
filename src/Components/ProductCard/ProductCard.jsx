import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <article className="ProductCard">
      <figure>
        <img
          src="https://th.bing.com/th/id/OIP.yyyPkS6L1Vs0KxS0SqHgNgHaE8?w=272&h=181&c=7&r=0&o=5&pid=1.7"
          alt=""
          title=""
        />
        <figcaption>Time Management Course</figcaption>
      </figure>
      <section className="CourseDetails">
        <h3>
          status : <span>Coming soon</span>
        </h3>
        <h3>
          Round  : <span> 15</span>
        </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?</p>
        <div className="buttonContainer">
          <button>More Details</button>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
