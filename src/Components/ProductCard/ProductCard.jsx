import React, { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import dbContext from "../../Contexts/DBContext";
import "./ProductCard.css";
const ProductCard = ({
  img,
  title,
  duration,
  status,
  roundNumber,
  discription,
  id,
  deleter
}) => {

  const {deleteEle} =useContext(dbContext)

  return (
    <article className="ProductCard">
      <figure>
      {deleter && <button className='Delete' onClick={()=>deleteEle(title)}><CiCircleRemove size={25}/></button>}

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
