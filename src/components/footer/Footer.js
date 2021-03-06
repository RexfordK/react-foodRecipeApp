import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-con">
      <div className="rows-container">
          <h3>Connect With Me</h3>
          <ul className="social-list center">
            <li>
              <a href="https://github.com/RexfordK" target="_blank">
                <i className="ion-social-github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rexford-koduah"
                target="_blank"
              >
                <i className="ion-social-linkedin" />
              </a>
            </li>
          </ul>
          <div className="resume-btn-con">
            <a
              className="resume-btn"
              href="https://drive.google.com/file/d/17UCGERCB7BJDxZVlYhcTDakWCwEDiGSA/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <p>Copyright &copy; 2018 by Rexford Koduah. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
