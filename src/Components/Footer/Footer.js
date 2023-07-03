import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Health plan</p>
            </a>
            <a href="/employer">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/employer">
              <p>Resources center</p>
            </a>
            <a href="/employer">
              <p>testimonials</p>
            </a>
            <a href="/employer">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/employer">
              <p>About</p>
            </a>
            <a href="/employer">
              <p>Press</p>
            </a>
            <a href="/employer">
              <p>Career</p>
            </a>
            <a href="/employer">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming Soon on</h4>
            <div className="social-media">
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaInstagram />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaTwitter />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} codeInn. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>terms & Conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
