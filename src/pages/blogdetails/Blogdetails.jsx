import React from "react";
import "./blogdetails.css";
import Panner from "../../Component/nav/panner/Panner";
import ph1 from "../../img/blogdetails/pic1.d8c3c8e35b95f89900a4.jpg";
import doc1 from "../../img/blogdetails/download1.jpg";
import comment from "../../img/blogdetails/comment.png";
import ph2 from "../../img/blogdetails/pic2.2c21a722397dfc7d2854.jpg";
import ph3 from "../../img/blogdetails/pic5.7eb547294db1e78a2604.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faSearch,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import docpre from "../../img/blogdetails/doc1.jpg";
import doc2 from "../../img/blogdetails/doc2.jpg";
import post1 from "../../img/blogdetails/post1.jpg";
import post2 from "../../img/blogdetails/post2.jpg";
import post3 from "../../img/blogdetails/post3.jpg";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Review from "./Review";
import { Link } from "react-router-dom";
export default function Blogdetails() {
  return (
    <div>
      <Panner title="Blog Details" />
      <section className="blogdetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-xl-8 mb-30 mb-md-50">
              <div className="img">
                <img src={ph1} alt="ph1" />
              </div>
              <ul className="doc">
                <li>
                  <img src={doc1} alt="" />
                  Sonar Moyna
                </li>
                <li>
                  <FontAwesomeIcon icon={faCalendar} />
                  19 July 2021
                </li>
              </ul>
              <h2>Precious Tips To Help You Get Better.</h2>
              <p className="firstp">
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you’re
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <div className="comment">
                <img src={comment} alt="" />
                <p>
                  Once you’ve gotten all the titles and have chosen the best
                  one, the next thing you need to do is to craft a magnetic
                  content. Great content marketers excel at creating content.
                </p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <ul className="imgs wp-block-gallery columns-6 is-cropped">
                <li className="blocks-gallery-item">
                  {" "}
                  <img src={ph2} alt="" />
                </li>
                <li className="blocks-gallery-item">
                  {" "}
                  <img src={ph3} alt="" />
                </li>
              </ul>
              <p>
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you’re
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="tagshare">
                <div className="tags">
                  <strong>Tags:</strong>
                  <span>Health Growth Life</span>
                </div>
                <div className="share">
                  <strong style={{marginRight:"15px"}} >Share:</strong>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faFacebook} className="face" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="precomment">
                <div>
                  <img src={docpre} alt="doc1" />
                </div>
                <div className="docdetails">
                  <h5>Sonar Z. Moyna</h5>
                  <p>
                    Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                    consequat happ quam vel enim augue.
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faFacebook} className="face" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="review">
                <h4 className="title">8 Comments</h4>
                <Review title="sonar" photo={doc2} />
                <Review title="Falikaz" photo={docpre} />
                <Review title="George" photo={doc2} />
                <Review title="Michel" photo={docpre} />
              </div>
              <div className="respond">
                <h4 className="title">Leave a Reply</h4>
                <form>
                  <div>
                    <input type="text" placeholder="Author" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <textarea
                    name="comment"
                    cols="50px"
                    rows="200px"
                    placeholder=" Comment"
                  ></textarea>
                </form>
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xl-4 mb-30">
              <aside className="sticky-top side-bar pd-1">
              <div className="search">
                <input type="text" placeholder="Enter your Keywords.." />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="recentpost">
                <h4 className="title">Recent post</h4>
                <div className="allpost">
                  <div className="imgpost">
                    <img src={post1} alt="" />
                  </div>
                  <div className="postdetails">
                    <h6>Precious Tips To Help You Get Better.</h6>
                    <p>
                      <FontAwesomeIcon icon={faCalendar} /> 21 July 2021
                    </p>{" "}
                  </div>
                </div>
                <div className="allpost">
                  <div className="imgpost">
                    <img src={post2} alt="" />
                  </div>
                  <div className="postdetails">
                    <h6>Ten Doubts You Should Clarify About.</h6>
                    <p>
                      <FontAwesomeIcon icon={faCalendar} /> 21 July 2021
                    </p>{" "}
                  </div>
                </div>
                <div className="allpost">
                  <div className="imgpost">
                    <img src={post3} alt="" />
                  </div>
                  <div className="postdetails">
                    <h6>The 10 Steps Needed For Putting.</h6>
                    <p>
                      <FontAwesomeIcon icon={faCalendar} /> 21 July 2021
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="gallery">
                <h4 className="title"> Our Gallery</h4>
                <div className="imgess">
                  <div>
                    {" "}
                    <img src={doc1} alt="" />
                    <img src={docpre} alt="" />
                    <img src={post1} alt="" />
                  </div>
                  <div>
                    {" "}
                    <img src={post3} alt="" />
                    <img src={ph1} alt="" />
                    <img src={ph3} alt="" />
                  </div>
                </div>
              </div>

              <div className="tagsdetails">
                <h4 className="title"> Tags</h4>
                <div className="links">
                  <Link to="/blog-details">Improvement</Link>
                  <Link to="/blog-details">Health</Link>
                  <Link to="/blog-details">Life</Link>
                  <Link to="/blog-details">Covid</Link>
                  <Link to="/blog-details">Healthy</Link>
                  <Link to="/blog-details">Growth</Link>
                  <Link to="/blog-details">Education</Link>
                  <Link to="/blog-details">Manage</Link>
                  <Link to="/blog-details">General</Link>
                </div>{" "}
              </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
