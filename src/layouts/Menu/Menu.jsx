import React from "react";
import styles from "./Menu.module.scss";
const Menu = ({ items }) => {
  return (
    <section className="container" id="menu">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Mеню</h2>
        <div className={styles.itemsWrapper}>
          {items.map((item, index) => (
            <a href="#" className={styles.menuItem} key={index}>
              <img src={item} alt="menuProduct" className={styles.menuImage} />
              <p className={styles.menuName}>Японская кухня</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
