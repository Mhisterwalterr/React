import React from 'react'
import {RxArrowLeft  } from "react-icons/rx";
import {GiPadlock  } from "react-icons/gi";
import {BiUser } from "react-icons/bi";
import './Login.css'

export default function 
() {
  return (
    <div className='loginContainer'>
    <div className='mainn'>
        <div className='logo2'>''
            <RxArrowLeft />
        </div>
        <div className='log1'>
            <h1>Log In</h1>
        </div>
        <div className='input'>
        <div>
            <span><GiPadlock /></span>
            <input type="text" placeholder='email' /><br />
        </div>
        <div>
            <span><BiUser /></span>
            <input type="text" placeholder='password'/>
        </div>
        </div>
        <div className='textColor'>
            <p>incorrect password</p>
        </div>
        <div className='button2'>
            <button>Log in</button>
        </div>
        <div className='signUp'> 
            <p>first time here? sign up</p>
        </div>
    </div>
    </div>
  )
}
