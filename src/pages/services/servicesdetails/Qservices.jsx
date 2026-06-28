import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const quetiondata = [
  {
    q: "How Doctor Can Ease Your Pain?",
    answer:
      " Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type andscrambled it to make a type specimen book",
  },
  {
    q: "How do I withdraw from a subject?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type andscrambled it to make a type specimen book",
  },
  {
    q: "Understand Doctor Before You Regret?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type andscrambled it to make a type specimen book",
  },
  {
    q: "What types of systems do you support?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type andscrambled it to make a type specimen book",
  },
  {
    q: "We Teach You How To Feel Better?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type andscrambled it to make a type specimen book",
  },
  {
    q: "How Can I Contact You?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type andscrambled it to make a type specimen book",
  },
];
function Qservices() {
  const [openindex, setopenindex] = useState(null);
  const toggle = (index) => {
    if (openindex === index) {
      setopenindex(null);
    } else {
      setopenindex(index);
    }
  };
  return (
    <div>
      {quetiondata.map((item, index) => (
        <div className="quetion" key={index}>
          <h2>
            <button id="btnphide" style={{background:openindex===index?"#f17732":"#565acf"}}  onClick={()=>toggle(index)}>
             {item.q}
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </h2> {openindex===index&&(
          <div className="phide" id="phide">
            <p>{item.answer}
            </p>
          </div>)}
        </div>
      ))}
    </div>
  );
}

export default Qservices;
