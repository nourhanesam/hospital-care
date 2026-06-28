import React from 'react'
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'
import "./loginre.css"
export default function LoginRe() {
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
                <div><input type="text" placeholder='User Name' /></div>
               <div> <input type="password" placeholder='Password' /></div>
                <div className='login'>
                  <Link to="/home" ><button className='btn btn-lg btn-primary mb-30 w-100'>Log in</button></Link>
                  <Link to="/forget password" >Forget Password?</Link>
                </div>
                <div className="reg">
                  <h7>Dont have any account?</h7>
                  <Link to="/Register"><button className='btn btn-lg btn-secondary w-100'>Register</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
