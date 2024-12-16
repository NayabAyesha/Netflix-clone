import React from 'react'
import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="Footer-icons">
        <img src={Youtube} alt="" className='youtube'/>
        <img src={instagram} alt="" className='instagram'/>
        <img src={facebook} alt="" className='facebook'/>
        <img src={twitter} alt="" className='twitter'/>
      </div>
      <ul style={{ color: "white" }}>

        <li>Audio Description</li>
        <li>Gifts Cards</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Invester Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>

      </ul>
      <br />
      <p className='copyright-text'>© 1997-2024 Netflix ,Inc.</p>
      
    </div>
  )
}

export default Footer
