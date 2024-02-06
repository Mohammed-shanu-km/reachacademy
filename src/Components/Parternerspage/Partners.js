import React from "react";
import "./Partners.css";
import icon1 from "../assets/U.S. Department of Education - png.png";
import icon2 from "../assets/IDP Education Global - png.png";
import icon3 from "../assets/Compass Education _ Melbourne VIC - png.png";
import icon4 from "../assets/Group (3).png";
import icon5 from "../assets/Lakshmibai college - png (1).png";

const Partners = () => {
  return (
    <section className="partner-main">
      <div className="partner-container">
        <div className="partner-content">
          <h1>Some of our partners</h1>
        </div>
        <div className="partner-icons">
          <div className="partners-icon-section">
            <div className="icon">
              <img src={icon1} alt="" />
            </div>
            <div className="icon-special">
              <img src={icon2} alt="" />
            </div>
          </div>

          <div className="partner-icon">
            <div className="icon">
              <img src={icon3} alt="" />
            </div>
            <div className="icon">
              <img src={icon4} alt="" />
            </div>
            <div className="icon">
              <img src={icon5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
