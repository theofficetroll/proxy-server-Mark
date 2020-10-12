import React from 'react';

import Menu from "./Menu.jsx";
import styles from './MenuBar.module.css';

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
        <a className={styles.menuHeader} data-menu="1">New Releases</a>
        <Menu items={menu1} menuNumber="1"/>
      </li>
      <li>
        <a className={styles.menuHeader}>Men</a>
      </li>
      <li>
        <a className={styles.menuHeader}>Women</a>
      </li>
      <li>
        <a className={styles.menuHeader}>Kids</a>
      </li>
      <li>
        <a className={styles.menuHeader}>Customize</a>
      </li>
      <li>
        <a className={styles.menuHeader}>Sale</a>
      </li>
    </ul>
  </div>
)

export default MenuBar;