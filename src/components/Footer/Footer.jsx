import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col about">
          <span className="footer-header">commerch</span>
          <p>One Stop For All Your Cool Merchs</p>
          <ul className="inline-list list--style-none footer__social-icons">
            <li class="list__inline-item">
              <a
                href="https://github.com/adiMallya/commerch"
                target="_blank"
                class="link-no-style"
              >
                <FaGithub />
              </a>
            </li>
            <li class="list__inline-item">
              <a
                href="https://www.linkedin.com/in/adithya-mallya-54438417a/"
                target="_blank"
                class="link-no-style"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li class="list__inline-item">
              <a href="#" target="_blank" class="link-no-style">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="col links">
          <span className="footer-title">Shop Now</span>
          <ul className="list--style-none">
            <li>Hoodies</li>
            <li>Posters</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="col links">
          <span className="footer-title">Customer Policies</span>
          <ul className="list--style-none">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="row">© 2023 commerch</div>
    </footer>
  );
};
