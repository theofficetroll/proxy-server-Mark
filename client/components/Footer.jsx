import React from 'react';

import FooterAccordion from "./FooterAccordion.jsx";
import styles from "./Footer.module.css";

const links1 = ["GIFT CARDS", "PROMOTIONS", "FIND A STORE", "SIGN UP FOR EMAIL", "BECOME A MEMBER", "NIKE JOURNAL", "SEND US FEEDBACK"];

const links2 = ["GET HELP", "Order Status", "Shipping and Delivery", "Returns", "Payment Options", "Gift Card Balance", "Contact Us"];

const links3 = ["ABOUT NIKE", "News", "Careers", "Investors", "Purpose", "Sustainability", "CA Supply Chains Act"];

const Footer = () => {
    return (
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerBody}>
            <div className={styles.linksMenu}>
              <FooterAccordion links={links1} />
              <FooterAccordion links={links2} />
              <FooterAccordion links={links3} />
            </div>
            <div className={styles.socialMenu}>
              <ul>
                <li>
                  <a className={styles.footerLink}>T</a>
                </li>
                <li>
                  <a className={styles.footerLink}>F</a>
                </li>
                <li>
                  <a className={styles.footerLink}>Y</a>
                </li>
                <li>
                  <a className={styles.footerLink}>I</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.subFooter}>
            <div>
              <a className={styles.countryPin}>
                <span>PIN</span>
                <span>United States</span>
              </a>
              <div className={styles.copyright}>© 2020 Nike, Inc. All Rights Reserved</div>
            </div>
            <div>
              <ul className={styles.subFooterMenu}>
                <li>
                  <div className={styles.footerLink}>Guides [MENU]</div>
                </li>
                <li>
                  <a className={styles.footerLink}>Terms of Sale</a>
                </li>
                <li>
                  <a className={styles.footerLink}>Terms of Use</a>
                </li>
                <li>
                  <a className={styles.footerLink}>Nike Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;