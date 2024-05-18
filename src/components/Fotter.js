import React from 'react'
import {Link} from"react-router-dom";
import FooterLogo from '../image/Footer.png';
import "./comp.css"
const Fotter = () => {
  return (
    <footer className="footer">
      <div className="fotter-logo">
        <img src={FooterLogo} alt="Logo" />
      </div>
      <div className="footer-section">
        <h4>Shazam WebApp</h4>
        <ul>
          <li><Link to="/link1">About</Link></li>
          <li><Link to="/link2">Career</Link></li>
          <li><Link to="/link2">News</Link></li>
          <li><Link to="/link2">Logs & Guidelines</Link></li>

          </ul>
      </div>
      <div className="footer-section">
        <h4>Products</h4>
        <ul>
          <li><Link to="/link3">IOS</Link></li>
          <li><Link to="/link4">Android</Link></li>
          <li><Link to="/link2">Windows</Link></li>
          <li><Link to="/link2">Web Player</Link></li>
          <li><Link to="/link2">Sonos</Link></li>
          </ul>
      </div>
      <div className="footer-section">
        <h4>Brands & Advertiser</h4>
        <ul>
          <li><Link to="/link5">Shazam for Brands</Link></li>
          
        </ul>
      </div>
      <div className="footer-section">
        <h4>Gifts & Promotions</h4>
        <ul>
          <li><Link to="/link7">Redeem Pro</Link></li>
        </ul>
      </div>
      <div className="footer-section">
      <h4>Connect</h4>
      <ul>
        <li><Link to="/link7">Help</Link></li>
        <li><Link to="/link7">Artists & Labels</Link></li>
        <li><Link to="/link7">Terms & privacy</Link></li>
        <li><Link to="/link7">Contact</Link></li>

        </ul>
    </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
      </div>
      
      <div className="footer-text">

      </div>
    </footer>
  )
}

export default Fotter