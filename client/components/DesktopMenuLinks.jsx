import React from 'react';

import styles from './Header.module.css';

const DeskTopMenuLinks = () => (
  <ul className={styles.navLinks}>
    <li>
      <a className={styles.menuLink}>New Releases</a>
      {/* <div className={styles.menu}>
        <div>Column: New and Featured
          <a>Link A: Shoes</a>
        </div>
      </div> */}
    </li>
    <li>
      <a className={styles.menuLink}>Men</a>
    </li>
    <li>
      <a className={styles.menuLink}>Women</a>
    </li>
    <li>
      <a className={styles.menuLink}>Kids</a>
    </li>
    <li>
      <a className={styles.menuLink}>Customize</a>
    </li>
    <li>
      <a className={styles.menuLink}>Sale</a>
    </li>
  </ul>
)

export default DeskTopMenuLinks;