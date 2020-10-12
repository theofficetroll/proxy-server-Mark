import React from 'react';

import MenuBar from './MenuBar.jsx';
import Banner from './Banner.jsx';
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
            <ul className={styles.userMenu}>
              <li>Help</li>
              <li>Join Us</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
        <header className={styles.mainHeader}>
          <div className={styles.headerWrapper}>
            <div className={styles.nikeIcon}>Nike-Icon</div>
            <div className={styles.navBar}>
              <MenuBar />
              <div className={styles.searchBar}>
                <input type="text" name="search" autoComplete="off" placeholder="Search"/>
                <button>S-Icon</button>
              </div>
              <div className={styles.mobileMenu}></div>
            </div>
            <div className={styles.accountBtns}>
                <div>Favorite-Icon</div>
                <div>Cart-Icon</div>
            </div>
          </div>
        </header>
        <Banner />
      </>
    )
}

export default Header;