import React from 'react'
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'
import "./loginre.css"
function Register() {
  return (
   <div id='root'>
      <div className="container">
        <div className="row justify-content-center mb">
          <div className="col-xl-6 col-lg-6 col-md-8 ">
            <div className="content">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <form action="">
                <div><input type="text" placeholder='User Name' required /></div>
               <div> <input type="email" placeholder='Email' required /></div>
               <div> <input type="password" placeholder='Password' required /></div>
                <div className='login'>
                  <Link to="/home"><button className='btn btn-lg btn-primary mb-30 w-100'>Register Now</button></Link>
                </div>
                <div className="reg">
                  <h7>Already have an account?</h7>
                  <Link to="/login and register"><button className='btn btn-lg btn-secondary w-100'>Log in</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Register
