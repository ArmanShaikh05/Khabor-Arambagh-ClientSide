import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer conatiner">
        <div className="footer-box box1">
          <div className="footer-title">
            Explore <span>KhaborArambagh</span>
          </div>
          <p className="footer-address">
            Welcome to Khaborarambagh, your reliable source for breaking news,
            insightful analysis, and thought-provoking stories from around the
            globe.
          </p>
        </div>
        <div className="footer-box box2">
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li className="footer-list-item">
              <Link to="/accessibility">Accessiblity Help</Link>
            </li>
            <li className="footer-list-item">
              <Link to="/advertise">Advertise with us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-box box3">
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="footer-list-item">
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li className="footer-list-item">
              <Link to="/guidance">Parential Guidance</Link>
            </li>
          </ul>
        </div>
        <div className="footer-box box4">
          <a
            href="https://www.instagram.com/khaborarambagh?igsh=MWZkcHpvMTF5ZHc0bg=="
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <i className="fa-brands fa-instagram" />
            khaborarambagh5034
          </a>
          <a
            href="https://www.facebook.com/khaborarmbagh?mibextid=hIlR13"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <i className="fa-brands fa-facebook" />
            Khabor Arambagh
          </a>
          <a
            href="https://youtube.com/@khaborarambagh5034?si=G2HJOHLdb10rnqTd"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <i className="fa-brands fa-youtube" />
            Khabor Arambagh
          </a>
          <a
            href="https://wa.me/message/LWTRN55WDQ2LF1"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
          >
            <i className="fa-brands fa-whatsapp" />
            Khabor Arambagh
          </a>
          <a href="/" className="footer-social">
            <i className="fa-solid fa-envelope" />
            khaborarambagh2020@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-text">
          Copyright © 2023 KhaborArambagh. The KhaborArambagh is not responsible
          for the content of external sites.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
