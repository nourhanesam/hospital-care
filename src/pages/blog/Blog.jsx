import React from "react";
import Panner from "../../Component/nav/panner/Panner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarDays,
  faChevronRight,
  faRightLong,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ph1 from "../../img/blog/pic1.a3848a1189e2114e1b47.jpg";
import doc1 from "../../img/blog/download1.jpg";
import ph2 from "../../img/blog/pic2.67db6c474a828bd7a0cd.jpg";
import doc2 from "../../img/blog/download2.jpg";
import ph3 from "../../img/blog/pic3.89b8315141d75bd31ced.jpg";
import doc3 from "../../img/blog/download3.jpg";
import ph4 from "../../img/blog/pic4.28ea761e88293ca4d821.jpg";
import doc4 from "../../img/blog/download4.jpg";
import ph5 from "../../img/blog/pic5.44c2a54210474d223a99.jpg";
import doc5 from "../../img/blog/download5.jpg";
import ph6 from "../../img/blog/pic6.42f81537f685791c71ac.jpg";
import doc6 from "../../img/blog/download6.jpg";
import ph7 from "../../img/blog/pic7.c1733b79898885a595bd.jpg";
import doc7 from "../../img/blog/download7.jpg";
import ph8 from "../../img/blog/pic8.a59ea2da7cc4c0bbd908.jpg";
import doc8 from "../../img/blog/download8.jpg";
import ph9 from "../../img/blog/pic9.9ca3a0422fec87cd6c98.jpg";
import doc9 from "../../img/blog/download9.jpg";
import "./blog.css";
export default function Blog() {
  return (
    <div>
      <Panner title="Blog Grid3" />
      <section className="blog">
        <div className="container">
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
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                
                    21 July 2021    </li>
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
                  </Link></div>
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
                    <img src={ph4} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc4} alt="doc1" />
                      Kalina
                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
                18 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                   Understand Health Before You Regret
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
             <div className="col-xl-4 col-md-6">
              <div className="sec">
                <div className="img">
                  <Link to="/blog-details">
                    <img src={ph6} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc6} alt="doc1" />
                  Peter Packer

                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
                16 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                Can you get a diflucan prescription online?
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
                    <img src={ph7} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc7} alt="doc1" />
                Sonar Moyna
                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
                15 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
                 Ten Gigantic Influences Of Health
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
                    <img src={ph8} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc8} alt="doc1" />
                 Kalina
                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
                14 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
               Why Is Skin Surgeon Considered Underrated
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
                    <img src={ph8} alt="ph1" />
                  </Link>
                </div>
                <div className="info">
                  <ul className="doc">
                    {" "}
                    <li>
                      {" "}
                      <Link to="/blog-details">
                        <img src={doc8} alt="doc1" />
                 Michel

                      </Link>{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCalendarDays} />{" "}
                  
               13 July 2021 </li>
                  </ul>
                  <h4 className="titleblog">
                    <Link to="/blog-details">
              Everyone need to go Dentist regularly
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
      <div className="btns">
         <div className="prev">
            <button>prev</button>
        </div>
        <div className="onee">
            <button>1</button>
        </div>
          <div className="two">
            <button>2</button>
        </div>
          <div className="three">
            <button>3</button>
        </div>
          <div className="next">
            <button>next</button>
        </div>
      </div>
    </div>
  );
}
