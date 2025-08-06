import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon} alt='' />
        <img src={instagram_icon} alt='' />
        <img src={twitter_icon} alt='' />
        <img src={youtube_icon} alt='' />
      </div>
      <ul>
        <l1>Audio Description</l1>
        <l1>Help Center</l1>
        <l1>Gift Cards</l1>
        <l1>Media Centre</l1>
        <l1>Investor Relations</l1>
        <l1>Jobs</l1>
        <l1>Terms of Use</l1>
        <l1>Privacy</l1>
        <l1>Leagal Notices</l1>
        <l1>Cookie Preferences</l1>
        <l1>Corporate Information</l1>
        <l1>Contact Us</l1>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
