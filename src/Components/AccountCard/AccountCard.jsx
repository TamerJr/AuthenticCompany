import React, { Fragment, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./AccountCard.css";
import { CiCircleRemove } from "react-icons/ci";
import dbContext from "../../Contexts/DBContext";
const AccountCard = ({ Ele }) => {
  return (
    <div className="AccountCard">
      {[Ele]?.map((element) => (
        <Fragment key={Ele.title}>
          <ProductCard {...element} deleter={true} />
        </Fragment>
      ))}
    </div>
  );
};

export default AccountCard;
