import React from "react";
import { GrMail } from "react-icons/gr";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRss,
  FaTwitter,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
export const FooterInner = () => {
    const [checkNews,setCheckNews] = React.useState(false)
  return (
    <div className="footer-inner">
      <div className="row justify-content-center ">
        <div className="col-lg-3 col-md-6">
          <div className="contact-area d-flex flex-column justify-content-between">
            <h6 className="contact-header">
              Aenean dignissim ante eu purus dictum, feugiat element erat
              luctus. Integer scelerisque, diam nec condimentum facilisis.
            </h6>
            <div className="contact-info">
              <span className="contact contact-phone">
                <FaPhoneAlt className="contact-icon" /> Tel: +12 0987654321
              </span>
              <span className="contact contact-email">
                <GrMail className="contact-icon" /> Email: example@demo.com
              </span>
              <span className="contact contact-location">
                <MdLocationPin className="contact-icon" /> Address: 6 Bis Rue
                Meyerbeer
              </span>
            </div>
            <div className="socialMediaWrapper">
              <h6 className="social-header">FOLLOW US</h6>
              <div className="social-media d-flex align-items-center ">
                <Link to="/" className="social-inner facebook-inner">
                  <span className="social-name facebook-name">Facebook</span>
                  <FaFacebookF className="social-icon facebook" />
                </Link>
                <Link to="/" className="social-inner twitter-inner">
                  <span className="social-name twitter-name">Twitter</span>
                  <FaTwitter className="social-icon twitter" />
                </Link>
                <Link to="/" className="social-inner rss-inner">
                  <span className="social-name rss-name">RSS</span>
                  <FaRss className="social-icon rss" />
                </Link>
                <Link to="/" className="social-inner youtube-inner">
                  <span className="social-name youtube-name">Youtube</span>
                  <FaYoutube className="social-icon youtube" />
                </Link>
                <Link to="/" className="social-inner vimeo-inner">
                  <span className="social-name vimeo-name">Vimeo</span>
                  <FaVimeoV className="social-icon vimeo" />
                </Link>
                <Link to="/" className="social-inner instagram-inner">
                  <span className="social-name instagram-name">Instagram</span>
                  <FaInstagram className="social-icon instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="footer-nav-wrapper">
            <div className="footer-nav-inner first-nav">
              <h6 className="footer-nav-header">INFORMATION</h6>
              <ul className="footer-nav">
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    About us
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Our stores
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Price drop
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    New products
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Best sellers
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Contact us
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-nav-inner mid-nav">
              <h6 className="footer-nav-header">WHY CHOOSE ?</h6>
              <ul className="footer-nav">
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Theme Features
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Typography
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Banner effect
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Documentation
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Support
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Rating
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-nav-inner last-nav">
              <h6 className="footer-nav-header">SAMPLE MENU</h6>
              <ul className="footer-nav">
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    About us
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Our stores
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Price drop
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    New products
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Best sellers
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Contact us
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="newsletterWrapper">
            <h6 className="footer-nav-header">NEWSLETTER</h6>
            <div className="newsletterArea">
              <p className="newsInfo">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Your Email Adress"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn fw-bold btn-primary"
                  type="button"
                  id="button-addon2"
                  disabled={checkNews ? "" : "disabled"}
                >
                  SUBSCRIBE
                </button>
              </div>
              <div className="checkSubscribe">
                  <input onClick={()=> setCheckNews(!checkNews)} checked={checkNews} type="checkbox" className="checkForm" />
                  <span className="checkInfo">Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
