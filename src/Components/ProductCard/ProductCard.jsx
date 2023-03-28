import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({
  img,
  title,
  duration,
  status,
  roundNumber,
  discription,
  id,
}) => {
  console.log(id)
  return (
    <article className="ProductCard">
      <figure>
        <img src={img} alt={title} title={title} />
        <figcaption>{title}</figcaption>
      </figure>
      <section className="CourseDetails">
        <h3>
          status :
          {status == "Coming Soon" ? (
            <span className="ComingSoon"> Coming soon</span>
          ) : (
            <span className="Available"> Open</span>
          )}
        </h3>
        <h3>
          Round : <span className="roundNumber"> {roundNumber}</span>
        </h3>
        <h3>
          Duration : <span className="duration"> {duration}</span>
        </h3>
        <p>{discription?.substring(0,100)}...</p>
        <div className="buttonContainer">
          <Link to={`/shop/productdetails/${id}`}>
            <button>More Details</button>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
