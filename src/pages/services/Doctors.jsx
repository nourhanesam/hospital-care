import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Doctors({title, spant, ph}) {
  return (
    <div>
      <div className="doc">
                <div className="docimg">
                  <img src={ph} alt="" />
                </div>
                <div className="docinfo">
                  <h3>{title}</h3>
                  <span>{spant}</span>
                  <ul>
                    <li><FontAwesomeIcon icon={faFacebook}/></li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                    <li><FontAwesomeIcon icon={faLinkedin}/></li>
                  </ul>
                </div>
              </div>
    </div>
  )
}

export default Doctors
