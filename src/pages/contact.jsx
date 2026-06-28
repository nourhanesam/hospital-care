import React from "react";
import Panner from "../Component/nav/panner/Panner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faLocation,
  faMap,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
import {
  faFacebook,
  faSquareLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Formcon from "./Formcon";
import Slidescon from "./Slidescon";

function Contact() {
  return (
    <div>
      <Panner title=" Contact Us" />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Formcon />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="slide">
                <div className="overlay">
                  <h3>Contact Us For Any Informations</h3>
                  <li>
                    <FontAwesomeIcon icon={faMap} /> Loction
                  </li>
                  <hr />
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email & Phone
                  </li>
                  <hr />
                  <p>info@yourdomain.com (+68) 120034509</p>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                    Follow Us
                  </li>
                  <hr />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faSquareLinkedin} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
       <Slidescon/>
    </div>
  );
}

export default Contact;
