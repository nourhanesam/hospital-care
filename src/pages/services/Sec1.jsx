import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./services.css"
function Sec1({ title, icon }) {
  return (
    <>
    <div className="icony">
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="iconcontant">
          <h3>{title}</h3>
          <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
          <button className="btn btn-primary">View More</button>
        </div>
    </div>
    </>
  );
}

export default Sec1;
