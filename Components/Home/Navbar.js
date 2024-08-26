import React from 'react';
import styles from "../../src/styles/Home/navbar.module.css"; // Replace with the path to your CSS file

const Navbar = () => {
  return (
    <div>
      <div className={styles.topnav}>
        <div>
          <img className={styles.logo} src="/logos/logo.jpg" alt="logo" />
        </div>
        <div className={styles.logotext}>
          <span className={styles.logotextblack}>HYPERGLOT</span>
          <span className={styles.logotextblack1}>REVIEW</span> - ISSUE 1
        </div>
      </div>
      <ul className={styles.navlinks}>
        <li>Artists</li>
        <li>Authors</li>
        <li>Podcast</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
