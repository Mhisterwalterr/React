import React from 'react'
import './NewAccount.css'
import {RxArrowLeft} from "react-icons/rx";
import { BiLink } from "react-icons/bi";


export default function () {
  return (
    <div className='newacc-container'>
        <div className='wrapper'>
        <div className='arrow'>
            <RxArrowLeft />
        </div>
        <div className='header3'>
        <div className='newacc'>
            <h1>New <br />Account</h1>
        </div>
        <div className='motion'>
        
            <div className='mot'>
                <h6>1/2</h6>
                <h6>steps</h6>
            </div>
        </div>
        </div>
        <div className='flint'>
          <div className='border'>
            <BiLink />
        </div>
          <div>
            <h5>Upload a profile picture <br/></h5>
          </div>
        </div>
        <div className="input2">
            <label for='name' id='name'>Name</label> <br />
            <input type="text" for='name' id='name' placeholder='mhister walter' /> <br/><br/>
            <label for='email' id='email'>E-mail </label> <br/>
            <input type="text" for='email' id='email'placeholder='virtigo6' />        
        </div>
        <div className='but'> 
        
        <button className="button">Next</button>
        
        </div>
        <div className='log'>
        <p>Not your first time here?
           <span> Log in</span>
           </p>
      </div>

        </div>
    </div>
  )
}
