import React from "react";

const Footer = () => (
  <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    {['facebook-official', 'instagram', 'snapchat', 'pinterest-p', 'twitter', 'linkedin'].map(icon => (
      <i key={icon} className={`fa fa-${icon} w3-hover-opacity`} style={{ marginRight: "10px" }}></i>
    ))}
  </footer>
);

export default Footer;
