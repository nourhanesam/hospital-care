import React from "react";
import "./servicesdetails.css";
import Panner from "../../../Component/nav/panner/Panner";
import blog1 from "../../../img/blog1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { LinearProgress } from "@mui/material";
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Qservices from "./Qservices";
import pdf from "../../../img/pdf.png"
import doc from "../../../img/doc.png"
import { Link } from "react-router-dom";
function Servicesdetails() {
  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow(!show);
  };
  return (
    <div>
      <Panner title="Services Details" />
      <section className="servicesdetails">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="img">
                <img src={blog1} alt="" />
              </div>
              <div className="text">
                <h2>Why Medical Had Been So Popular Till</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="row ul">
                <div className="col-md-6 mb-30">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCheck} />
                      Then along come two they
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} /> That’s just a little
                      bit more than{" "}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} />
                      Standard dummy text ever since
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} />
                      Simply dummy text of the printing
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} />
                      Make a type specimen book
                    </li>
                  </ul>{" "}
                </div>
                <div className="col-md-6 mb-30">
                  <div className="skillbar">
                    <div className="bar">
                      <p>Advanced Technology</p>
                      <span>96%</span>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value="96"
                      sx={{
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: "#eee",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#565acf",
                        },
                      }}
                    />
                  </div>

                  <div className="skillbar">
                    <div className="bar">
                      <p>Certified Engineers</p>
                      <span>79%</span>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value="79"
                      sx={{
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: "#eee",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#565acf",
                        },
                      }}
                    />
                  </div>
                  <div className="skillbar">
                    <div className="bar">
                      <p>6 years Experience</p>
                      <span>75%</span>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value="75"
                      sx={{
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: "#eee",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#565acf",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="q">
                  <h4>Popular Questions</h4>
                  <p>
                    Standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                 <Qservices/>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
                <div className="menu">
                    <ul>
                        <li className="one" ><Link to="/sevices details"><span>Engine Diagnostics</span>  <FontAwesomeIcon icon={faAngleRight}/></Link></li>
                        <li><Link to="/sevices details"><span>Lube Oil and Filters</span><FontAwesomeIcon icon={faAngleRight}/></Link></li>
                        <li><Link to="/sevices details"><span>Belts and Hoses</span><FontAwesomeIcon icon={faAngleRight}/></Link></li>
                        <li><Link to="/sevices details"><span>Air Conditioning</span><FontAwesomeIcon icon={faAngleRight}/></Link></li>
                        <li><Link to="/sevices details"><span>Brake Repair</span><FontAwesomeIcon icon={faAngleRight}/></Link></li>
                        <li><Link to="/sevices details"><span>Tire and Wheel Services</span><FontAwesomeIcon icon={faAngleRight}/></Link></li>
                    </ul>
                </div>
                <div className="menu down">
                    <h5>Download</h5>
                  <div className="comp">
                    <img src={pdf} alt="" />
                    <div className="comptext">
                        <h5 >Download our Brochures</h5>
                        <span>Download</span>
                    </div>
                  </div>
                  <div className="comp">
                    <img src={doc} alt="" />
                    <div className="comptext">
                      <h5 >Our Company Details</h5>
                        <span>Download</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicesdetails;
