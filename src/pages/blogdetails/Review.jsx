import React from 'react'
import "./blogdetails.css"
function Review({ title, photo}) {
  return (
                    <div className="commentbody">
                      <div className="nameimg">
                        <div>
                          <img src={photo} alt="doc" />
                        </div>
                        <div className="commentdetails">
                          <h5>{title}</h5>
                          <p>May 09, 2021 at 10:45 am</p>
                        </div>
                      </div>
    
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley.
                      </p>
                      <button>Reply</button>
                    </div>
  )
}

export default Review
