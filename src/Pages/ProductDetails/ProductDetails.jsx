import React from "react";
import data from "../../DataSource";

const ProductDetails = () => {
  const { id } = useParams();
  let newData = data[id];
  return (
    <section>
      <div>
        <h1>{newData?.title}</h1>
        <h3>
          Duration : <span>{newData?.title}</span>
        </h3>
        <div>
          <h3>Description :</h3>
          <p>{newData?.discription}</p>
        </div>
        <div>
          instructors :
        </div>
      </div>
      <figure>
        <img src={newData?.img} alt={newData?.title} title={newData?.title} />
      </figure>
    </section>
  );
};

export default ProductDetails;
