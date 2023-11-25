import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <span>Contact Us</span>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Sourcepedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
