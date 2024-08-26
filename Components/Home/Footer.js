import React from 'react';
import styles from '../../src/styles/Home/footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <a href="/page/submissions.html">Artists</a>
        <a href="/page/aboutus.html">Authors</a>
      </div>
      <p className={styles.language}>Follow Us On:</p>
      <p>
        <a href="https://instagram.com/hyperglotreview?igshid=YmMyMTA2M2Y=">
          <FaInstagram/>Instagram
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089166761501&mibextid=ZbWKwL">
          <FaFacebook/>Facebook
        </a>
        <a href="https://twitter.com/HyperglotReview">
        <FaTwitter/>Twitter
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/company/91701909/admin/">
        <FaLinkedin/>LinkedIn
        </a>
        <a href="https://www.youtube.com/@HyperglotReview/featured">
        <FaYoutube/>Youtube
        </a>
      </p>
      <p className={styles.light}>
        &copy; 2022 Hyperglot Solutions OPC Private Limited. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
