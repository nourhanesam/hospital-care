import React from "react";
import headerimg from "../img/doctor.7c2bc96d67d3eba1d64a.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";
import {
  faAngleRight,
  faBedPulse,
  faCalendarDays,
  faChevronRight,
  faDroplet,
  faRightLong,
  faSquare,
  faSyringe,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import ph1 from "../img/panner1.jpg";
import phb from "../img/pic-2.0593bc2fd8a13cf8c19f.jpg";
import phc from "../img/pic-3.fa689b1037dbf69567a3.jpg";
import { Link } from "react-router-dom";
import dow1 from "../img/blog/download1.jpg";
import dow2 from "../img/blog/download2.jpg";
import dow3 from "../img/blog/download3.jpg";
import dow4 from "../img/blog/download4.jpg";
import dow5 from "../img/blog/download5.jpg";
import dow6 from "../img/blog/download6.jpg";
import backg from "../img/backg.png";
import ph5 from "../img/blog/pic5.44c2a54210474d223a99.jpg";
import doc5 from "../img/blog/download5.jpg";
import ph2 from "../img/blog/pic2.67db6c474a828bd7a0cd.jpg";
import doc2 from "../img/blog/download2.jpg";
import ph3 from "../img/blog/pic3.89b8315141d75bd31ced.jpg";
import doc3 from "../img/blog/download3.jpg";
import Swipper from "../Component/pagesnav/Swipper";
import phone from "../img/mobile.f82d73222992d2101a09.png";
import location from "../img/download (1).png";
import love from "../img/download (3).png";
import edit from "../img/download (2).png";
import correct from "../img/download.png";
import woman from "../img/women.eb5c49c523f7d6240d33.png";
import Homeswiper from "./Homeswiper";
import "./services/services.css";
function Home() {
  return (
    <header>
      <section id="headerh">
        <div className="container " style={{ marginTop: "42px" }} id="header">
          <div
            className="row "
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0px",
            }}
          >
            <div className="col-md-6 col-lg-7" style={{ margin: "-61px 0" }}>
              <h5>We Provide All Health Care Solution</h5>
              <h2>Protect Your Health And Take Care To Of Your Health</h2>
              <button>
                <a href="#">Read more </a>
              </button>
              <span> + </span>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="headerbox">
                <img src={headerimg} alt="headerimg" />
                <FontAwesomeIcon icon={faSquare} />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      </li>
                  </ul>
                </div>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="heading">
          <h6 style={{ width: "150px" }}>Working Process</h6>
          <h2>How we works?</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="workbox">
              <div className="worknum">01</div>
              <div className="workcontent">
                <h5 class=" secondary mb-10" style={{ color: "#f17732" }}>
                  Make Appointmnet
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
                <Link to="/services" class="btn btn-primary light">
                  View More <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="workbox active">
              <div className="worknum">02</div>
              <div className="workcontent">
                <h5 class=" secondary  mb-10" style={{ color: "#f17732" }}>
                  Take Treatment
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
                <Link to="/services" class="btn btn-primary light">
                  View More <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="workbox">
              <div className="worknum">03</div>
              <div className="workcontent">
                <h5 class=" secondary mb-10" style={{ color: "#f17732" }}>
                  Registration
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
                <Link to="/services" class="btn btn-primary light">
                  View More <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------- */}

      <section id="appoinment">
        <div className="container-fluid">
          <div className="inner">
            <div className="row align-items-center gap-5">
              <div className="col-md-6 col-xl-5 col-lg-6">
                <div className="formbook">
                  <h3>Book Appoinment</h3>
                  <form action="">
                    <select name="select department" id="">
                      <option value="Select Deoartment">
                        Select Deoartment
                      </option>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>
                    <select name="select doctor" id="">
                      <option value="Select Deoartment">
                        Select Deoartment
                      </option>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>
                    <input type="text" placeholder="Your Name" />
                    <input type="numbe" placeholder="Your Phone" />
                    <input type="date" />
                  </form>
                  <button type="submit" class="btn btn-primary btn-lg">
                    Appointment Now
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-xl-5 col-lg-6 imgs">
                <img src={phone} alt="" />
                <div className="imggroup">
                  <img className="correct" src={correct} alt="" />
                  <img className="location" src={location} alt="" />
                  <img className="edit" src={edit} alt="" />
                  <img className="love" src={love} alt="" />
                  <img className="woman" src={woman} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="secslider">
        <section className="section-area section-sp1 service-wraper">
          <div className="container">
            <div
              className="row align-items-center "
              style={{ display: "flex" }}
            >
              <div className="col-xl-4 col-lg-7 mb-30">
                <div className="headingtext">
                  <div className="heading" style={{ textAlign: "left" }}>
                    <h6 style={{ textAlign: "center", margin: "0px" }}>
                      Services
                    </h6>
                    <h2>We Cover A Big Variety Of Medical Services</h2>
                  </div>
                  <p>
                    We provide the special tips and advice’s of heath care
                    treatment and high level of best.
                  </p>
                  <button>
                    <Link to="/serivces">All Services</Link>
                  </button>
                </div>
              </div>

              <div className="col-xl-8 mb-15 col-lg-3 slider">
                <Homeswiper />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="slid " style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="heading">
            <h6>Testimonial</h6>
            <h2>See What Are The Patients Saying About us</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="allimg">
                <img src={backg} alt="" />
                <div data-num="1" className="dowimg">
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
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <Swipper />
            </div>
          </div>
        </div>
      </section>
      <section className="news" style={{ marginTop: "15" }}>
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
                      <FontAwesomeIcon icon={faCalendarDays} /> 20 July 2021{" "}
                    </li>
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
                    </Link>
                  </div>
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
                      <FontAwesomeIcon icon={faCalendarDays} /> 19 July 2021{" "}
                    </li>
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
                    </Link>
                  </div>
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
                      <FontAwesomeIcon icon={faCalendarDays} /> 17 July 2021{" "}
                    </li>
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Home;
