import React from "react";
import "./Herocounter.css";

const Herocounter = () => {
  return (
    <section className="herocounter-main">
      <div className="hero-counter-container">
        <div className="counter">
          <div className="counter-1">
            <h1>150+</h1>
            <p>Toal course</p>
          </div>
          <div className="line"></div>
          <div className="counter-1">
            <h1>250+</h1>
            <p>Total instructor</p>
          </div>
          <div className="line"></div>
          <div className="counter-1">
            <h1>35k+</h1>
            <p>Total students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herocounter;
