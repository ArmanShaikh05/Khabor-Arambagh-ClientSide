import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer conatiner">
        <div className="footer-box box1">
          <div className="footer-title">
            Explore <span>KhaborArambagh</span>
          </div>
          <p className="footer-address">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed quos est excepturi, ab voluptates dicta sequi
            eveniet dolor quas.
          </p>
        </div>
        <div className="footer-box box2">
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="footer-list-item">
              <a href="/">Accessiblity Help</a>
            </li>
            <li className="footer-list-item">
              <a href="/">Feedback</a>
            </li>
            <li className="footer-list-item">
              <a href="/">Advertise with us</a>
            </li>
          </ul>
        </div>
        <div className="footer-box box3">
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/">About Us</a>
            </li>
            <li className="footer-list-item">
              <a href="/">Terms of Use</a>
            </li>
            <li className="footer-list-item">
              <a href="/">Disclaimer</a>
            </li>
            <li className="footer-list-item">
              <a href="/">Partner Content</a>
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
