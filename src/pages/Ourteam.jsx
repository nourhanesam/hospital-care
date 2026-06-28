import React from "react";
import Panner from "../Component/nav/panner/Panner";
import Doctors from "./services/Doctors";
import doc0 from "../img/services/member1.22ac1d594f69ddaf3e08.jpg";
import docb from "../img/services/member2.d03a0686030bcd2f05ec.jpg";
import docc from "../img/services/member3.0d822ecc51b2532abe0e.jpg";
import doc4 from "../img/services/member4.9045579a47c3fd89b17c.jpg";
import doc5 from "../img/services/member5.24eb182159ea2d58610f.jpg";
import doc6 from "../img/services/member6.be2a77adde3dc48f9d5b.jpg";
function Ourteam() {
  return (
    <div>
      <Panner title=" Our Team" />
      <section className="doctors">
        <div className="container">
          <div className="heading">
            <h6>Our Doctors</h6>
            <h2>Meet Best Doctors</h2>
          </div>
          <div className="row mt-5">
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
          <div className="row mt-5 mb-5">
            <div className="col-md-6 col-lg-4">
              <Doctors title="Dr. Addition Smith" spant="Dentist" ph={doc4} />
            </div>
            <div className="col-md-6 col-lg-4">
              <Doctors title="Dr. Mahfuz Riad" spant="Chiropractor" ph={doc5} />
            </div>
            <div className="col-md-6 col-lg-4">
              <Doctors
                title="Dr. David Benjamin"
                spant="Cardiologist"
                ph={doc6}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourteam;
