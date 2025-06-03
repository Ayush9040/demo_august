import React from 'react'
import './style.scss'
import {
  copyright,
  email2,
  location1,
  years,
  teachers,
  lives,
  facebook,
  instagram,
  instagramhindi,
  twitter,
  youtube,
  youtubehindi,
  linkedin,
  publication,
  mobile,
} from '../../assets/icons/icon'
import { Link } from 'react-router-dom'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
const Footer = () => {
  return (
    <div className="footer-container global-padding">
      <div className="logo-description">
        <div className="logo">
          <a href="https://theyogainstitute.org/">
            <img
              src={`${baseDomain}${homeAssets.homeAsset70}`}
              alt="footer logo"
            />
          </a>
        </div>

        <div className="footer-description">
          <p>
            The Yoga Institute, Santacruz (East), Mumbai, India was founded in
            1918 by Shri Yogendraji, and is the oldest centre of yoga in the
            world.
          </p>
        </div>

        <div className="social-icons-container">
          <ul>
            <a
              href="https://twitter.com/tyi_official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{twitter}</li>
            </a>
            <a
              href="https://www.youtube.com/c/theyogainstituteofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{youtube}</li>
            </a>
            <a
              href="https://www.youtube.com/channel/UCHTjc5zq3Bl6agGQQf7_Xeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{youtubehindi}</li>
            </a>
            <a
              href="https://www.linkedin.com/company/theyogainstituteofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{linkedin}</li>
            </a>
            <a
              href="https://www.facebook.com/theyogainstituteofficial/."
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{facebook}</li>
            </a>
            <a
              href="https://www.instagram.com/theyogainstituteofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{instagram}</li>
            </a>
            <a
              href="https://www.instagram.com/hansajiyogendra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{instagramhindi}</li>
            </a>
            <a
              href="https://instagram.com/nutridietclinicofficial?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>{instagram}</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="heading-footer-container">
        <div className="footer-content">
          <div className="footer-logo">{years}</div>
          <div className="footer-text">
            <p>105+</p>
            <span>Number of Years</span>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-logo">{lives}</div>
          <div className="footer-text">
            <p>10cr+</p>
            <span>Lives Touched</span>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-logo">{teachers}</div>
          <div className="footer-text">
            <p>1L+</p>
            <span>Teachers Certified</span>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-logo">{publication}</div>
          <div className="footer-text">
            <p>500+</p>
            <span>Publications</span>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="menu">
          <ul>
            <Link to="/wellness">
              <li>Corporate wellness</li>
            </Link>
            <Link to="/affiliations">
              <li>Affiliations</li>
            </Link>
            <Link className="soon" to="/#footer">
              <li>Careers</li>
            </Link>
            <Link to="/csr">
              <li>CSR</li>
            </Link>
          </ul>
          <div className="carrier-list">
            <ul>
            <Link to="/image-gallery">
                <li>News & Media</li>
              </Link>
              <Link to="/terms-and-conditions">
                <li>Terms & Conditions</li>
              </Link>
              <Link to="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>

              <Link to="/our-branches">
                <li>Locate us</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="logo-content" id="footer">
          {location1}
          <a
            href="https://www.google.com/maps/place/The+Yoga+Institute/@19.085104,72.843153,16z/data=!4m5!3m4!1s0x0:0xb1b1dcb9c91cb9a!8m2!3d19.0851499!4d72.8431203?hl=en&shorturl=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai -
              400055 India
            </p>
          </a>

          {mobile}
          <p>
            <a href="tel:+912226110506">+91-7738155500,&nbsp;</a>
            <a href="tel:+912226110506">+91-22-26110506,<br /></a>
            <a href="tel:+912226103568">+91-22-26103568, </a>
            <a href="tel:+917045558181">+91-7045558181</a>
          </p>
          {email2}
          <p>
            <a href="mailto:info@theyogainstitute.org">
              info@theyogainstitute.org
            </a>
          </p>
          {copyright}
          <p>
            2024 <span>The Yoga Institute.</span> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
