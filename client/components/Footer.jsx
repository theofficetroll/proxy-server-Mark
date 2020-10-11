import React from 'react';

import styles from "./Footer.module.css";

const links = ["GIFT CARDS", "PROMOTIONS", "FIND A STORE", "SIGN UP FOR EMAIL", "BECOME A MEMBER", "NIKE JOURNAL", "SEND US FEEDBACK"];

const Footer = () => {

  const accordionItems = links.map((link, index) => {
    return (
      <>
            <div className={styles.accordionHeader}></div>
        <div className={styles.accordionBody}>
          <ul>
            <li className={styles.footerLink} key={index}>
              <a>{link}</a>
            </li>
          </ul>
        </div>
      </>

      )
  });

    return (
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerBody}>
            <div className={styles.linksMenu}>
              <div className={`${styles.accordion} ${styles.first}`}>
                {accordionItems}
              </div>
            </div>
            <div className={styles.socialMenu}></div>
          </div>
          <div className={styles.subFooter}>
            <div>
              <span>United States</span>
              <span>© 2020 Nike, Inc. All Rights Reserved</span>
            </div>
            <div>
              <span>Guides</span>
              <span>Terms of Sale</span>
              <span>Terms of Use</span>
              <span>Nike Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;