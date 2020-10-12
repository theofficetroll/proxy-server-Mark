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
  },
  {
    category: "New For Women",
    links: ["Shoes", "Clothing", "Equipment", "Shop All New"],
  },
  {
    category: "New For Kids",
    links: ["Boys Shoes", "Boys Clothing", "Girls Shoes", "Girls Clothing", "Shop All New"],
  }
];

const menu2 = [
  {
    category: "New & Featured",
    links: ["New Releases", "Best Sellers", "Best of Air Max Shoes", "Fall Must Haves", "Hoodies & Joggers", "New in Nike Pro", "Vintage Vibes", "Sale - Up to 40% Off"],
  },
  {
    category: "Shoes",
    links: ["Lifestyle", "Running", "Basketball", "Jordan", "Training & Gym", "Soccer", "Golf", "Track & Field", "Skateboarding", "Tennis", "Baseball", "Sandals & Slides", "Shoes $100 & Under", "All Shoes"],
  },
  {
    category: "Clothing",
    links: ["Tops & T-Shirts","Shorts","Hoodies & Sweatshirts","Pants & Tights","Jackets & Vests","Swimwear","Polos","Nike Pro","Yoga","Socks & Underwear","Big & Tall","All Clothing"],
  },
  {
    category: "Accessories & Equipment",
    links: ["Bags & Backpacks","Apple Watch Nike","Hats, Visors & Headbands"],
  },
  {
    category: "Shop Collection",
    links: ["Golf","Jordan","Soccer","Running","Basketball","Tennis","NikeLab","Training & Gym","Football","Baseball","Nike Sportswear","ACG","Skateboarding","Lacrosse","Fan Gear","Nike FlyEase"],
  },
];

const menu3 = [
  {
    category: "New & Featured",
    links: ["New Releases","Best Sellers","Best of Air Max Shoes","Fall Style Guide","Hoodies & Sweatpants","Nike Luxe Leggings","Nike Pro Stealth","Sale - Up to 40% Off"],
  },
  {
    category: "Shoes",
    links: ["Lifestyle","Running","Training & Gym","Basketball","Jordan","Soccer","Tennis","Track & Field","Sandals & Slides","Skateboarding","Softball","Shoes $100 & Under","All Shoes"],
  },
  {
    category: "Clothing",
    links: ["Pants & Leggings","Sports Bras","Tops & T-Shirts","Shorts","Hoodies & Sweatshirts","Jackets & Vests","Swimwear","Nike Pro","Plus Size","Skirts & Dresses","Nike Maternity","Yoga","Socks","All Clothing"],
  },
  {
    category: "Accessories & Equipment",
    links: ["Bags & Backpacks","Hats, Visors & Headbands","Apple Watch Nike"],
  },
  {
    category: "Shop Collection",
    links: ["Running","Golf","Soccer","Jordan","Training & Gym","Tennis","Nike Sportswear","ACG","NikeLab","Volleyball","Basketball","Softball","Skateboarding","Lacrosse","Fan Gear","Nike FlyEase"],
  },
];

const menu4 = [
  {
    category: "New & Featured",
    links: ["New Releases","Best Sellers","Best of Air Max","Fall Favorites","Hoodies & Sweatpants","Sale - Up to 40% Off"]
  },
  {
    category: "Boys Shoes",
    links: ["Big Kids (3.5Y - 7Y)","Little Kids (10.5C - 3Y)","Baby & Toddler (0C - 10C)","Lifestyle","Running","Basketball","All Shoes"]
  },
  {
    category: "Girls Shoes",
    links: ["Big Kids (3.5Y - 7Y)","Little Kids (10.5C - 3Y)","Baby & Toddler (0C - 10C)","Lifestyle","Running","Basketball","All Shoes"]
  },
  {
    category: "Baby & Toddler",
    links: ["Baby Girl","Baby Boy","All Shoes","All Clothing","Baby Box Sets","All Shoes (0C - 10C)","Boys' Clothing (0M - 4T)","Girls' Clothing (0M - 4T)"]
  },
  {
    category: "Boys Clothing",
    links: ["Big Kids (XS - XL)","Little Kids (4 - 7)","Baby & Toddler (0M - 4T)","Hoodies & Sweatshirts","Pants & Tights","Jackets ","Tops & T-Shirts","Nike Pro & Baselayer","Shorts","All Clothing"]
  },
  {
    category: "Girls Clothing",
    links: ["Big Kids (XS - XL)","Little Kids (4T - 7)","Baby & Toddler (0M - 4T)","Hoodies & Sweatshirts","Pants & Tights","Jackets ","Tops & T-Shirts","Sports Bras","Shorts","All Clothing"]
  },
  {
    category: "Accessories & Equipment",
    links: ["Bags & Backpacks","Hats ","Socks"]
  },
  {
    category: "Shop Collection",
    links: ["Rep Your City","Nike Adventure Club","Sandals & Slides","Surf & Swimwear","Jordan Kids","Fan Gear","Nike FlyEase"]
  },
]

const menu5 = [
  {
    category: "New & Featured",
    links: ["Customize with Nike By You","Nike By You New Releases","Basketball By You","Blazer By You","Air Max By You"]
  },
  {
    category: "Mens",
    links: ["Basketball","Lifestyle","Running","Football","Training & Gym","Soccer","Baseball","Skateboarding"]
  },
  {
    category: "Womens",
    links: ["Lifestyle","Running","Training & Gym","Basketball","Soccer","Softball","Skateboarding"]
  },
]

const menu6 = [
  {
    category: "Sale - Up to 40% Off",
    links: []
  },
  {
    category: "Mens Sale",
    links: ["Shoes","Clothing","Equipment"]
  },
  {
    category: "Womens Sale",
    links: ["Shoes","Clothing","Equipment"]
  },
  {
    category: "Kids Sale",
    links: ["Shoes","Clothing","Equipment"]
  },
]

const MenuBar = () => (
  <div className={styles.menuBar}>
    <ul className={styles.navLinks}>
      <li>
        <a className={styles.menuHeader} data-menu="1">New Releases</a>
        <Menu items={menu1} menuNumber="1"/>
      </li>
      <li>
        <a className={styles.menuHeader} data-menu="2">Men</a>
        <Menu items={menu2} menuNumber="2"/>
      </li>
      <li>
        <a className={styles.menuHeader} data-menu="3">Women</a>
        <Menu items={menu3} menuNumber="3"/>
      </li>
      <li>
        <a className={styles.menuHeader} data-menu="4">Kids</a>
        <Menu items={menu4} menuNumber="4"/>
      </li>
      <li>
        <a className={styles.menuHeader} data-menu="5">Customize</a>
        <Menu items={menu5} menuNumber="5"/>
      </li>
      <li>
      <a className={styles.menuHeader} data-menu="6">Sale</a>
        <Menu items={menu6} menuNumber="6"/>
      </li>
    </ul>
  </div>
)

export default MenuBar;