import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav>
        {/* <a href="#"><img class="header-logo" src="./Proworld Logo-1.png" alt=""></a> */}
        <label  for="toggler">
            <i class="fa fa-bars"></i>
        </label>
        <input type="checkbox" id="toggler" name=""/>
        <div class="menu">
            <ul class="list">

                <li><a id='home' href="#">Home</a></li>
                <li><a href="#">Satlite centers</a></li>

                <li><a href="#">Courses</a></li>
                <li><a href="#">Abouts Us</a></li>
                <li ><a id='reg' href="#">Register</a></li>

                {/* <li><a href="#"><button class="header-button">Contact Us</button></a></li> */}
            </ul>
        </div>
    </nav>
</header>
  )
}

export default Navbar