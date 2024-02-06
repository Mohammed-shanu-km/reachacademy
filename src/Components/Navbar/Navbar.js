import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul class="nav-bar">
          <input type="checkbox" id="check" />
          <span class="menu">
            <div className="x-mark">
              <label for="check" class="close-menu">
                <i class="fas fa-times"></i>
              </label>
            </div>
        
              <li>
                <a id="home" href="">Home</a>
              </li>
              <li>
                <a href="">Satlite Centers</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
            
          </span>
          <label for="check" class="open-menu">
            <i class="fas fa-bars"></i>
          </label>
          <div className="button-header">
            <li>
              <a href="">
                <button className="button-1">SIGN IN</button>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
