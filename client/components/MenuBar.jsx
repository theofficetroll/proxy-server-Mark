import React from 'react';

import Menu from "./Menu.jsx";
import styles from './Header.module.css';

const menu1 = [
  {
    category: "New & Featured",
    links: ["Shop All New Arrivals", "SNKRS Launch Calendar", "Best of Air Max Shoes", "Fall Must-Haves", "Gear Up For Sport", "Only For Members"],
  },
  {
    category: "New For Men",
    links: ["Shoes", "Clothing", "Equipment", "Shop All New"],
  }
];

const MenuBar = () => (
  <div className={styles.menuBar}>
    <ul className={styles.navLinks}>
      <li>
        <a className={styles.menuLink} data-menu="1">New Releases</a>
        <Menu items={menu1} menuNumber="1"/>

        {/* <div className={styles.menu}>
          <div>Column: New and Featured
            <a>Link A: Shoes</a>
          </div>
        </div> */}
      </li>
      <li>
        <a className={styles.menuLink}>Men</a>
        <Menu />
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
  </div>
)

export default MenuBar;