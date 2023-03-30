import React ,{useContext} from "react";
import { useParams } from "react-router-dom";
import dbContext from "../../Contexts/DBContext";
import data from "../../DataSource";

import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const {dataList,addData,deleteEle}=useContext(dbContext)
  const alreadyExist=dataList.filter(ele=>
    ele.title=== data[id].title) 
    console.log(alreadyExist[0])
  let newData = data[id];
  return (
    <section className="ProductDetails-Container">
      <div className="CourseDescription">
        <h1>{newData?.title}</h1>
        <h3>
          Duration : <span>{newData?.duration}</span>
        </h3>
        <div >
          <h3>Status :</h3>
          {newData?.status == "Coming Soon" ? (
            <p className="ComingSoon status">
              {newData?.status}
              <button>NONTIFY WHEN OPEN</button>
            </p>
          ) : (
            <p className="Open status">
              {newData?.status}
              <button onClick={()=>addData(newData)} disabled={alreadyExist[0] != undefined } >{alreadyExist[0] != undefined ? "Already have":"BUY NOW " }</button>
            </p>
          )}
        </div>
        <div>
          <h3>Description :</h3>
          <p>{newData?.discription}</p>
        </div>

      </div>
      <figure>
        <img src={newData?.img} alt={newData?.title} title={newData?.title} />
      </figure>
    </section>
  );
};
export default ProductDetails