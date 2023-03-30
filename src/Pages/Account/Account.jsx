import React, { Fragment, useContext } from "react";
import { GiShadowFollower } from "react-icons/gi";
import dbContext from "../../Contexts/DBContext";
import { AccountCard } from "../../Utilities/Utilities";
import "./Account.css";
const Account = () => {
  const { dataList } = useContext(dbContext);
  const boughtList = dataList?.filter((ele) => ele?.status === "Open");
  const FollowList = dataList?.filter((ele) => ele?.status === "Coming Soon");
  return (
    <section className="AccountElement">
      {boughtList.length != 0 && (
        <div className="BoughtList">
          <h1>Your Courses</h1>
          <div className="AccountCardContainer">
            {boughtList?.map((ele) => (
              <Fragment key={ele.title}>
                <AccountCard Ele={ele} />
              </Fragment>
            ))}
          </div>
        </div>
      )}
      {FollowList.length != 0 && (
        <div className="Followinglist">
          <h1>Your Following List</h1>
          {FollowList?.map((ele) => (
            <Fragment key={ele.title}>
              <AccountCard Ele={ele} />
            </Fragment>
          ))}
        </div>
      )}
    </section>
  );
};

export default Account;
