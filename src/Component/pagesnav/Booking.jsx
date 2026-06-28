import React from "react";
import Panner from "../nav/panner/Panner";
import "./booking.css";
function Booking() {
  return (
    <div className="booking">
      <Panner title="Booking" />
      <div className="center">
        <div className="container book">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-6">
              <div className="form">
                <div>
                  <h4>Book Appointment</h4>
                  <form>
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
                  <button type="submit" class="btn btn-secondary btn-lg">
                    Appointment Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
