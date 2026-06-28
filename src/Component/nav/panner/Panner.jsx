import { faHome, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import plus from "../../../img/plus2.png"
import circle from "../../../img/circle.png"
import "./panner.css";
function Panner({ title }) {
  return (
    <section className="panner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>{title}</h2>
            <li style={{textAlign:"center"}}>
              <Link to="/home">
               <FontAwesomeIcon icon={faHouse} />Home
              </Link>
              /{title}
            </li>
          </div>
          <img className="circle" src={circle} alt="circle" />
          <img className="plus" src={plus} alt="plus" />
        </div>
      </div>
    </section>
  );
}

export default Panner;
