import React from "react";
import "./about.css";
import Panner from "../nav/panner/Panner";
import ph1 from "../../img/panner1.jpg";
import phb from "../../img/pic-2.0593bc2fd8a13cf8c19f.jpg";
import phc from "../../img/pic-3.fa689b1037dbf69567a3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doc0 from "../../img/services/member1.22ac1d594f69ddaf3e08.jpg";
import docb from "../../img/services/member2.d03a0686030bcd2f05ec.jpg";
import docc from "../../img/services/member3.0d822ecc51b2532abe0e.jpg";
import dow1 from "../../img/blog/download1.jpg";
import dow2 from "../../img/blog/download2.jpg";
import dow3 from "../../img/blog/download3.jpg";
import dow4 from "../../img/blog/download4.jpg";
import dow5 from "../../img/blog/download5.jpg";
import dow6 from "../../img/blog/download6.jpg";
import backg from "../../img/backg.png"
import ph5 from "../../img/blog/pic5.44c2a54210474d223a99.jpg";
import doc5 from "../../img/blog/download5.jpg";
import ph2 from "../../img/blog/pic2.67db6c474a828bd7a0cd.jpg";
import doc2 from "../../img/blog/download2.jpg";
import ph3 from "../../img/blog/pic3.89b8315141d75bd31ced.jpg";
import doc3 from "../../img/blog/download3.jpg";
import {
  faBedPulse,
  faCalendarDays,
  faChevronRight,
  faDroplet,
  faSyringe,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import Doctors from "../../pages/services/Doctors";
import Swipper from "./Swipper";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <Panner title="About US" />
      <section className="about1">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="imges">
                <ul>
                  <li className="oneim">
                    <img src={ph1} alt="" />
                  </li>
                  <li className="two">
                    <img src={phb} alt="" />
                  </li>
                  <li className="three">
                    <img src={phc} alt="" />
                  </li>
                  <li>
                    <div>
                      20 <span>Year Experience</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-30  ">
              <div className="content aboutcon ">
                <h6>About us</h6>
                <h2>The Great Place Of Medical Hospital Center</h2>
                <p>
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best technology involve in the our
                  hospital.
                </p>
                <div className="row">
                  <ul>
                  <li>
                    <FontAwesomeIcon icon={faTruckFast} />
                    Emergency Help
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faSyringe} />
                    Qualified Doctors
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBedPulse} />
                    Best Professionals
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faDroplet} />
                    Medical Treatment
                  </li></ul>
                </div>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="num">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-30">
              <div className="numsec">
                <h2>120</h2>
                <h5>Years With You</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-30">
              <div className="numsec">
                <h2>400</h2>
                <h5>Awards</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-30">
              <div className="numsec">
                <h2>250</h2>
                <h5>Doctors</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-30">
              <div className="numsec">
                <h2>800</h2>
                <h5>Satisfied Client</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="doctors">
        <div className="container">
          <div className="heading">
            <h6>Our Doctors</h6>
            <h2>Meet Best Doctors</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <Doctors title="Dr. Addition Smith" spant="Dentist" ph={doc0} />
            </div>
            <div className="col-md-6 col-lg-4">
              <Doctors title="Dr. Mahfuz Riad" spant="Chiropractor" ph={docb} />
            </div>
            <div className="col-md-6 col-lg-4">
              <Doctors
                title="Dr. David Benjamin"
                spant="Cardiologist"
                ph={docc}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="slid " style={{marginTop:"50px"}}>
        <div className="container">
          <div className="heading">
            <h6>Testimonial</h6>
            <h2>See What Are The Patients Saying About us</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6">
                <div className="allimg">
                    <img src={backg} alt="" />
              <div data-num="1"  className="dowimg">
                <img src={dow1} alt="" />
              </div>
              <div data-num="2" className="dowimg">
                <img src={dow2} alt="" />
              </div>
              <div data-num="3" className="dowimg">
                <img src={dow3} alt="" />
              </div>
              <div data-num="4" className="dowimg">
                <img src={dow4} alt="" />
              </div>
              <div data-num="5" className="dowimg">
                <img src={dow5} alt="" />
              </div>
              <div data-num="6" className="dowimg">
                <img src={dow6} alt="" />
              </div>
            </div></div>
            <div className="col-md-12 col-lg-6">
               <Swipper/> 
            </div>
          </div>
        </div>
      </section>
        <section className="news" style={{marginTop:"15"}}>
        <div className="container">
            <div className="heading">
            <h6>Latest News</h6>
            <h2>Our Latest News</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="sec">
                <div className="img">
                  <Link to="/blog-details">
                    <img src={ph2} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc2} alt="doc1" />
                       Peter Packer
                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                 
                    20 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                      In this hospital there are special surgeon{" "}
                    </Link>
                  </h4>
                  <div className="btnblog">
                  <Link
                    to="/blog-details"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Read More <FontAwesomeIcon icon={faChevronRight} />
                  </Link></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="sec">
                <div className="img">
                  <Link to="/blog-details">
                    <img src={ph3} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc3} alt="doc1" />
                        Sonar Moyna
                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
                   19 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                    Why Is Skin Surgeon Considered Underrated{" "}
                    </Link>
                  </h4>
                  <div className="btnblog">
                  <Link
                    to="/blog-details"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Read More <FontAwesomeIcon icon={faChevronRight} />
                  </Link></div>
                </div>
              </div>
            </div>
              <div className="col-xl-4 col-md-6">
              <div className="sec">
                <div className="img">
                  <Link to="/blog-details">
                    <img src={ph5} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc5} alt="doc1" />
                    Michel
                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
                17 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                  Health Will Be A Thing Of The Past And Here
                    </Link>
                  </h4>
                  <div className="btnblog">
                  <Link
                    to="/blog-details"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Read More <FontAwesomeIcon icon={faChevronRight} />
                  </Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
