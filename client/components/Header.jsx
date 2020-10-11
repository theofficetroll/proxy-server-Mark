import React from 'react';

import DesktopMenuLinks from './DesktopMenuLinks.jsx';
import styles from "./Header.module.css";

const Header = () => {
    return (
      <>
        <div className={styles.brandHeader}>
          <div className={styles.headerWrapper}>
            <ul className={styles.brandIcons}>
              <li>Jordan icon</li>
              <li>Converse icon</li>
            </ul>
            <ul className={styles.menuLinks}>
              <li>Help</li>
              <li>Join Us</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
        <header className={styles.mainHeader}>
          <div className={styles.headerWrapper}>
            <div className={styles.nikeIcon}>Nike Icon</div>
              <div className={styles.navBar}>
                <div className={styles.desktopMenu}>
                  <DesktopMenuLinks />
                  <div className={styles.searchBar}>
                    <input type="text" name="search" autoComplete="off" placeholder="Search"/>
                    <button>Search Icon</button>
                  </div>
                </div>
                <div className={styles.mobileMenu}></div>
              </div>
              <div className={styles.accountBtns}>
                  <div>Favorite icon</div>
                  <div>Cart icon</div>
              </div>
          </div>
        </header>
      </>
    )
}

export default Header;