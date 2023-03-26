import React from "react";
import CountUp from "react-countup";
import "./ClientCounter.css"
const ClientCounter = () => {
  return (
    <section className="CountUp">
      <div className="Count">
        <CountUp end={1800} duration={6} />
      </div>
      <div className="Count">
        <CountUp end={739} duration={3} />
      </div>
    </section>
  );
};

export default ClientCounter;
