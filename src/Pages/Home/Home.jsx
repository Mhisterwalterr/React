import React from 'react'
import './Home.css'
import {RiFocus2Line} from "react-icons/ri";

export default function Home() {
  return (
 
    <div className='homeContainer'>
    <div className='main'>
        <div className='logo'>
            <RiFocus2Line />
            
        </div>
    <div className='words'>
        <h1>Start <br /> your <br />adventure</h1>
    </div>
    <div className='buttonn'>
        <button className='button'>Log in</button>
    </div>
    <div><h6>you dont have an account?<span>sign up here</span></h6></div>
    
    </div>
    </div>
  )
}
