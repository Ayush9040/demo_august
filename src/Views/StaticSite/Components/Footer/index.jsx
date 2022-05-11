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
    <div className='footer-container global-padding'>
      <div className='logo-description'>
        <div className='logo'>
          <img src={baseDomain+homeAssets.homeAsset70} />
        </div>
        <br />

        <div className='footer-description'>
          <p>
            The Yoga Institute, Santacruz(East), Mumbai, India was founded in
            1918 by Shri Yogendraji, and is the oldest centre of yoga in the
            world
          </p>
        </div>
        <br />

        <div className='social-icons-container'>
          <ul>
            <a
              href='https://twitter.com/tyi_official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
              target='_blank'
              rel='noreferrer'
            >
              <li>{twitter}</li>
            </a>
            <a
              href='https://www.youtube.com/c/theyogainstituteofficial'
              target='_blank'
              rel='noreferrer'
            >
              <li>{youtube}</li>
            </a>
            <a href='https://www.youtube.com/c/theyogainstituteofficial'>
              <li>{youtubehindi}</li>
            </a>
            <a
              href='https://www.linkedin.com/company/theyogainstituteofficial/'
              target='_blank'
              rel='noreferrer'
            ></a>
            <li>{linkedin}</li>
            <li>{facebook}</li>
            <li>{instagram}</li>
            <li>{instagramhindi}</li>
          </ul>
        </div>
      </div>
      <div className='heading-footer-container'>
        <div className='footer-content'>
          <div className='footer-logo'>{years}</div>
          <div className='footer-text'>
            <p>102+</p>
            <span>Number of Years</span>
          </div>
        </div>
        <div className='footer-content'>
          <div className='footer-logo'>{lives}</div>
          <div className='footer-text'>
            <p>10cr+</p>
            <span>Lives Touched</span>
          </div>
        </div>
        <div className='footer-content'>
          <div className='footer-logo'>{teachers}</div>
          <div className='footer-text'>
            <p>1L+</p>
            <span>Teachers Certified</span>
          </div>
        </div>
        <div className='footer-content'>
          <div className='footer-logo'>{publication}</div>
          <div className='footer-text'>
            <p>500+</p>
            <span>Publications</span>
          </div>
        </div>
      </div>
      <div className='contact'>
        <div className='menu'>
          <ul>
            <Link to='/courses'>
              <li>
                Wellness and Health
                <br />
                Camps
              </li>
            </Link>
            <Link to='/publication'>
              <li>Books and Periodicals</li>
            </Link>
            <li>Yoga Explore</li>
            <Link to='/donation'>
              <li>Social Initiatives</li>
            </Link>
            <Link to='/courses'>
              <li>Corporate Wellness</li>
            </Link>
          </ul>
          <div className='carrier-list'>
            <ul>
              <Link to='/join-our-team'>
                <li>Career</li>
              </Link>
              <li>Blog</li>
              <a
                href='https://goo.gl/maps/bxH6SifrXjXAhteV7'
                target='_blank'
                rel='noreferrer'
              >
                <li>Locate us</li>
              </a>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <br />
        <br />

        <div className='logo-content'>
          {location1}
          <p>
            Shri Yogendra Marg, Prabhat Colony, Santacruz East, Mumbai - 400055
            India
          </p>
          {mobile}
          <p>+91-22-26110506</p>
          {email2}
          <p>info@the yogainstitute.org</p>
          {copyright}
          <p>
            2022 <span>The Yoga Institute.</span> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
