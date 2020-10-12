import React from 'react';

import styles from './Header.module.css';

const Menu = ( {items, menuNumber} ) => (
  <div className={styles.menu} data-menu={menuNumber}>
    <div>Column: New and Featured
      <a>Link A: Shoes</a>
    </div>
  </div>
);

export default Menu;