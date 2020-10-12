import React from 'react';
import cx from 'classnames';

import styles from './MenuBar.module.css';

const MenuColumn = ( {category, links} ) => {

  const linkItems = links.map((link, index) => <a className={styles.menuItem} key={index} >{link}</a>);

  return (
    <div className={styles.column}>
      <button className={styles.menuItem}>{category}</button>
      {linkItems}
    </div>
  )
}

const Menu = ( {items, menuNumber} ) => {

 return (
  <div className={cx(styles.menu, styles.focused)} data-menu={menuNumber}>
    <div className={styles.columnContainer}>
      <MenuColumn category={items[0].category} links={items[0].links} />
    </div>
  </div>
 )
};

export default Menu;