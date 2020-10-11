import React from 'react';

import styles from "./Footer.module.css";

const Footer = () => {
    return (
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.body}>
            <div className={styles.linksMenu}></div>
            <div className={styles.socialMenu}></div>
          </div>
          <div className={styles.subFooter}></div>
        </div>
      </footer>
    )
}

export default Footer;