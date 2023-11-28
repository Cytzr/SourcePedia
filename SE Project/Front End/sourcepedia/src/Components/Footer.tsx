import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <span>Contact Us : 0123456789</span>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-facebook"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Sourcepedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
