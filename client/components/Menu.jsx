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
  const columns = items.map((item, index) => {
    return <MenuColumn category={item.category} links={item.links} key={index} />
  })

 return (
  <div className={styles.menu} data-menu={menuNumber}>
    <div className={styles.container}>
      {columns}
    </div>
  </div>
 )
};

export default Menu;