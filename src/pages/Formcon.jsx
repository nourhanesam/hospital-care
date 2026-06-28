import React, { useState } from 'react'

export default function Formcon() {
    const [name, setname]=useState("");
    const[show, setshow]=useState(true);
    const formhandler=(e)=>{
        e.preventDefault();
        if(name.length=== 0){
            setshow(false)
            return;
        }else{
              setshow(true) 
        }
     
    }
  return (
    <div>
       <form action="" onSubmit={formhandler}>
                <div className="form-control">
                  <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setname(e.target.value)}} />
                  {!show&&<p>not empty</p> }
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Your Number" />
                </div>
                <select>
                  <option>Select Department</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
                <div className="form-control">
                  <textarea placeholder="Type Message"></textarea>
                </div>       <button>Submit</button>
              </form>
       
    </div>
  )
}
