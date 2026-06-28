import React from "react";
import logo from "../../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import face from "../../../img/face.png";
import twi from "../../../img/twi.png";
import insta from "../../../img/insta.png";
import link from "../../../img/link.png";
import "./footer.css"
export default function Footer() {
  return (
    <footer>
      <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={logo} alt="logo" className="footerlogo" />
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="footercontact">
              <div className="footericon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footertext">
                <h6>Contact Us</h6>
                <h4>+01 123 456 7890</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">FaQ'S</a>
              </li>
              <li>
                <a href="#">Our teams</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
              <li>
                <a href="#">Dental Care</a>
              </li>
              <li>
                <a href="#">Cardiac Clinic</a>
              </li>
              <li>
                <a href="#">Massege Therapy </a>
              </li>
              <li>
                <a href="#">Cardiology</a>
              </li>
              <li>
                <a href="#">Precise Diagnosis</a>
              </li>
              <li>
                <a href="#">Abmbulance Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <form>
              <input type="mail"  placeholder="Enter Email"/>
              <button type="submit">Subscribe Now </button>
            </form>
            <ul className="social">
              <li>
                <a href="#">
                  {" "}
                  <img src={face} alt="social" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src={twi} alt="social" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src={insta} alt="social" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src={link} alt="social" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <hr />
      <div className="footerbottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <span>Copyright © 2023 Design & Developed by <strong>ThemeTrades</strong> </span>
                </div>
            </div>
        </div>
      </div></div>
    </footer>
  );
}
