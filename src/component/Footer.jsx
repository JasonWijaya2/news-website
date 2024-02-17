import React from 'react'
import { FaTwitter, FaGithubAlt, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container-fluid text-center p-5 mt-4' style={{backgroundColor:'#fff321'}}>
      <div className='row align-items-center'>
        <div className='col'>
          <img src="../src/assets/logo.jpg" alt="logo_footer" />
          <p>copyright © 2024</p>
        </div>
        <div className='text-start col'>
          <p>Privacy Policy</p>
          <p>Do not sell my personal info</p>
          <p>Terms of service</p>
          <p>Site Map</p>
        </div>
        <div className='col'>
          <div className='d-flex flex-row'>
            <div className='p-2'>About</div>
            <div className='p-2'>Contact</div>
            <div className='p-2'>Careers</div>
            <div className='p-2'>Coupons</div>
          </div>
          <div className='d-flex flex-row'>
            <div className='p-2'>
              <FaTwitter style={{ fontSize: '24px' }}/>
            </div>
            <div className='p-2'>
              <FaGithubAlt style={{ fontSize: '24px' }}/>
            </div>
            <div className='p-2'>
              <FaFacebook style={{ fontSize: '24px' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer