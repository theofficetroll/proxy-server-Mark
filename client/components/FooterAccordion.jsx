import React from 'react';

import styles from "./Footer.module.css";

const FooterAccordion = ( {links} ) => {
  const linkItems = links.map((link, index) => (
    <li className={styles.footerLink} key={index}>
      <a>{link}</a>
    </li>
  ));

  return (
    <div className={`${styles.accordion}`}>
      <div className={styles.accordionHeader}></div>
      <div className={styles.accordionBody}>
        <ul>
          {linkItems}
        </ul>
      </div>
    </div>
  )
}

export default FooterAccordion;
