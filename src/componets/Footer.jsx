import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Kumbh<span>navigator</span>
          </h3>

          <p class="footer-links">
            <Link to={"/"} class="link-1">
              Home
            </Link>

            <Link to={"/About"}>About</Link>

            <Link to={"/Contact"}>Contact</Link>
          </p>

          <p class="footer-company-name">Kumbh-navigator © 2024</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Sarvajanik University</span> Shree Ramkrishna Institute of
              Computer Education & Applied Sciences.
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+123456789</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">abc@agmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
