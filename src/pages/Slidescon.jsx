import React from "react";
import phone from "../img/phone.png";
import address from "../img/address.png";
import email from "../img/email.png";
export default function Slidescon() {
  return (
    <div className="slidecon">
      <div className="container">
        <div className="row "  >
          <div className="con">
          <div className="col-lg-4 col-md-5 mb-30 mr-2 side" style={{borderColor:"#e2c4ff"}}>
            <div className="imgg">
              <img src={phone} alt="" />
            </div>
            <div className="contentt">
              <h5>Contact Number</h5>
              <p>+001 123 456 790</p>
              <p>+002 3424 44 00</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 mb-30 mr-2 side" style={{borderColor:"#ffbdbc"}}>
            <div className="imgg">
              <img src={email} alt="" />
            </div>
            <div className="contentt">
              <h5>Email Address</h5>
              <p>info@yourdomain.com</p>
              <p>example@support.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-30 mr-2 side" style={{borderColor:"#a4fcc4"}}>
            <div className="imgg">
              <img src={address} alt="" />
            </div>
            <div className="contentt">
              <h5>Address</h5>
              <p>2005 Stokes Isle Apt. 896, Venaville</p>
              <p>10010, USA</p>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  );
}
