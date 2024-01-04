import React from "react";
import {  FaFacebook, FaInstagram, FaLinkedin, FaGoogle, FaYoutube } from 'react-icons/fa';
import "./Home.scss";
function Home() {
  return (
    <main>
  
      <div className="homeheading">
       <h1>Shashi sahani</h1>
<h6>I'm a passinate <span className="developer">React.js Developer</span> from Gaziabad</h6>
      </div>
      <div className="social-link">

      <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram  className="icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  className="icon" />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <FaGoogle className="icon"  />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube  className="icon" />
      </a>
      </div>
    </main>
  );
}

export default Home;
