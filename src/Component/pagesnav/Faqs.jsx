import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ph1 from "../../img/blog/pic1.a3848a1189e2114e1b47.jpg";
import doc1 from "../../img/blog/download1.jpg";
import ph2 from "../../img/blog/pic2.67db6c474a828bd7a0cd.jpg";
import doc2 from "../../img/blog/download2.jpg";
import ph3 from "../../img/blog/pic3.89b8315141d75bd31ced.jpg";
import doc3 from "../../img/blog/download3.jpg";
import Panner from "../nav/panner/Panner";
import Qservices from "../../pages/services/servicesdetails/Qservices";
import "./faqs.css";
function Faqs() {
  return (
    <div>
      <Panner title="Faq's" />
      <div className="container">
        <div className="q">
          <div className="row ">
            <div className="col-md-12 col-lg-6">
              <Qservices />
            </div>
            <div className="col-md-12 col-lg-6">
              <Qservices />
            </div>
          </div>
        </div>
        <section>
          <div className="heading">
            <h6>Latest News</h6>
            <h2>Our Latest News</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="sec">
                <div className="img">
                  <Link to="/blog-details">
                    <img src={ph1} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc1} alt="doc1" />
                        John deo
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} /> 21 July 2021{" "}
                    </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                      Dental Care for Women is very important{" "}
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faqs;
