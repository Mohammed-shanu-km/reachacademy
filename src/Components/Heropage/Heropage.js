import React from "react";
import "./Heropage.css";
import logo from "../assets/Academia-reach-Logo 1.svg";
import smileman from "../assets/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall 1.svg";
const Heropage = () => {
  return (
    <section className="hero-section-main">
      <div className="hero-container">
        <div className="hero-contents">
          <div className="hero-content">
            <img src={logo} alt="" />
            <div className="cont">
              <h1>Advancing Education,</h1>
              <h1>Inspiring Innovation</h1>
              <p>
                Join us on our educational journey as we strive to make a<br />{" "}
                lasting impact on the world of learning . Together, we can
                <br /> shape a brighter future through knowledge, research, and{" "}
                <br />
                innovation.
              </p>
            </div>
          </div>
          <div className="hero-image">
            <img src={smileman} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heropage;
