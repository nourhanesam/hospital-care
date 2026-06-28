import React from "react";
import "./services.css";
import Panner from "../../Component/nav/panner/Panner";
import Sec1 from "./Sec1";
import doc0 from "../../img/services/member1.22ac1d594f69ddaf3e08.jpg"
import docb from "../../img/services/member2.d03a0686030bcd2f05ec.jpg"
import docc from "../../img/services/member3.0d822ecc51b2532abe0e.jpg"
import ph1 from "../../img/blog/pic1.a3848a1189e2114e1b47.jpg"
import doc1 from "../../img/blog/download1.jpg";
import ph2 from "../../img/blog/pic2.67db6c474a828bd7a0cd.jpg";
import doc2 from "../../img/blog/download2.jpg";
import ph3 from "../../img/blog/pic3.89b8315141d75bd31ced.jpg";
import doc3 from "../../img/blog/download3.jpg";
import ph4 from "../../img/blog/pic4.28ea761e88293ca4d821.jpg";
import doc4 from "../../img/blog/download4.jpg";
import ph5 from "../../img/blog/pic5.44c2a54210474d223a99.jpg";
import doc5 from "../../img/blog/download5.jpg";
import {
  faBedPulse,
  faBriefcaseMedical,
  faCalendarDays,
  faCapsules,
  faChevronRight,
  faStethoscope,
  faSyringe,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import Doctors from "./Doctors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Services() {
  return (
    <div>
      <Panner title="Services" />
      <section className="services">
        <div className="container">
          <div className="row">
            <section className="services">
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <Sec1 title="Diagnostics" icon={faStethoscope} />
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <Sec1 title="Treatment" icon={faCapsules} />
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <Sec1 title="Surgery" icon={faBriefcaseMedical} />
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <Sec1 title="Emergency" icon={faTruckMedical} />
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <Sec1 title="Vaccine" icon={faSyringe} />
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <Sec1 title="Qualified Doctors" icon={faBedPulse} />
                  </div>
                </div>
              </div>
            </section>
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
           <Doctors title="Dr. David Benjamin" spant="Cardiologist" ph={docc} />
            </div>
          </div>
        </div>
      </section>
      <section className="news">
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

export default Services;
