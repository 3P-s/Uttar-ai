import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>
    <div className="gpt3__footer-links ">
      <div className="gpt3__footer-links_logo flex">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>3P's Org </p>
        <p> All Rights Reserved</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 3-P's</p>
    </div>
  </div>
);

export default Footer;
