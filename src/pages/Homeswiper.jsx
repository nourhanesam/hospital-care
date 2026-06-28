import { faBedPulse, faBriefcaseMedical, faCapsules, faStethoscope, faSyringe, faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Slider from "react-slick";
import Sec1 from "../pages/services/Sec1";
function Homeswiper() {

const settings = {
    infinite: true,
    speed: 50,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  };

  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <Sec1 title="Diagnostics" icon={faStethoscope} />
        </div>
        <div>
          <Sec1 title="Treatment" icon={faCapsules} />
        </div>
        <div>
        <Sec1 title="Emergency" icon={faTruckMedical} />
        </div>
        <div>
         <Sec1 title="Vaccine" icon={faSyringe} />
        </div>
        <div>
        <Sec1 title="Qualified" icon={faBedPulse} />
        </div>
        <div>
          <Sec1 title="Surgery" icon={faBriefcaseMedical} />
        </div>
      </Slider>
    </div>


       
    </>
   
  )
}

export default Homeswiper
