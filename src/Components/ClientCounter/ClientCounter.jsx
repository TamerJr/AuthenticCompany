import React from "react";
import CountUp from "react-countup";
import "./ClientCounter.css";
const ClientCounter = () => {
  return (
    <>
    <h1>
      Our Numbers
    </h1>
    <section className="CountUp">
      <div className="CounterDetails">
        <h1>Session Count</h1>
        <div className="Count">
          <CountUp end={1800} duration={6} />
        </div>
      </div>
      <div className="CounterDetails">
        <h1>Clients</h1>
        <div className="Count">
          <CountUp end={739} duration={3} />
        </div>
      </div>
    </section>
    </>
  );
};

export default ClientCounter;
