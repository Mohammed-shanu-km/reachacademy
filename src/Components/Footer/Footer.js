import React from "react";
import "./Footer.css";
import footerlogo from "../assets/Academia-reach-Logo 2 (2).svg";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer-main">
        <div className="footer-container">
          <div className="footer-card-main">
            <div className="footer-card1">
              <img src={footerlogo} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="footer-icon">
                <FaFacebook className="reach" /> <AiFillInstagram  className="reach" />
                <FaYoutube  className="reach" /> <FaTwitter  className="reach" />
              </div>
            </div>
            <div className="footer-card2">
              <h1>About</h1>
              <a>Menu</a>
              <a>Feuters</a>
              <a>News&Blogs</a>
              <a>Helsp&support</a>
            </div>
            <div className="footer-card2">
              <h1>About</h1>
              <a>How we work</a>
              <a>Terms of service</a>
              <a>Pricing</a>
              <a>FAQ</a>
            </div>
            <div className="footer-card3">
              <h1>Contact Us</h1>
              <p>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </p>
              <p>+1 202-918-2132</p>
              <p>education@mail.com</p>
              <p> www.education.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
