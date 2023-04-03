import React from 'react'
import './ForgetPasword.css'
import {RxArrowLeft} from "react-icons/rx";

export default function Forgetpassword() {
  return (
    <div className='forgetPasswordContainer'>
        <div className='wrapper'>
          <div className='logoWrapper'>
            <RxArrowLeft />
          </div>

        <div className='input3'>
        <label for='email' id='email'>E-mail </label> <br />
            <input type="text" for='email' id='email'placeholder='virtigo6' />
        </div>
        <div className='butt'>
            <button className='submitButton'>submit</button>
        </div>
        </div>
        </div>
    
  )
}
