import React from 'react'
import image from './image/asset 0.svg'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    // <div>Navbar</div>

    <>

      <nav class="navbar bg-light  navbar-expand-lg fixed-top " id="home">
        <div class="container">
          <div class="col main_logo ">
            <img src={image} alt="" width="50%" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas header offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body main_menu">
              <ul class="navbar-nav justify-content-end pe-3 navbar-nav-scroll">
                <li class="nav-item">
                  <a class="nav-link active homes" to="/">
                    <Link to="/"> Home</Link>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link " to="/tour">
                    <Link to="/tour"> Tour</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" to="/destination">
                    <Link to="/destination"> Destination </Link>

                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" to="/pages">
                    <Link to="/pages"> Pages </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" to="/blog">
                    <Link to="/blog"> Blog </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" to="/contact">

                    <Link to="/Contacts"> Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      

    </>


  )
}

export default Navbar;
