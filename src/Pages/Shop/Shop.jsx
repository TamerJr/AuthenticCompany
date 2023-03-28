import React, { useState } from "react";
import { ProductCard } from "../../Utilities/Utilities";
import data from "../../DataSource";
import "./Shop.css";
import {FcNext} from "react-icons/fc"
const Shop = () => {
  const [ourData, setOurData] = useState(data);
  let pages = ourData?.length / 4;
  const [startEle, setStartEle] = useState(0);
  const [endEle, setEndEle] = useState(ourData?.length / 4);
  let dataPerPage = ourData.slice(startEle, endEle);
  const handleNewPage = () => {
    setStartEle(endEle);
    setEndEle(endEle + pages);
  };
  const handleBack = () => {
    setStartEle(startEle - 6);
    setEndEle(endEle - 6);
  };
  return (
    <section className="producdrsContainerSection">
      <div className="prodcutsContainer">
        {dataPerPage?.map((ele, indx) => (
          <ProductCard {...ele} key={indx} id={indx} />
        ))}
      </div>
      {endEle < 25 && (
        <div className="navigationContainer">
          <button disabled={startEle == 0} title="back" onClick={handleBack} className="backButton">
          <FcNext size={30}/>
          </button>
          <button disabled={endEle == ourData?.length} title="next" onClick={handleNewPage}>
            <FcNext size={30}/>
          </button>
        </div>
      )}
    </section>
  );
};

export default Shop;
