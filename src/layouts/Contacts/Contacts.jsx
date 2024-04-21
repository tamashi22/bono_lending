import React from "react";
import clsx from "clsx";
import ContactImg from "images/Contact.jpg";
import InstaIcon from "icons/instagram.svg?react";
import TwogisIcon from "icons/twoGis.svg?react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <img src={ContactImg} alt="contact" className={styles.contactImg} />
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Мы открыты с 10:00 до 02:00</h2>
            <p className={styles.description}>
              Работаем в будни и выходные дни с 10:00 до 02:00. Бронируйте
              столики по телефону:
            </p>
            <a href="#" className={styles.link}>
              +996 0220140866
            </a>
            <div></div>
            <a href="#" className={styles.link}>
              +996 0220140866
            </a>
            <h2 className={styles.title}>С нетерпением ждем вас</h2>
            <p className={styles.description}>
              на улице Сухэ-Батора, 17 6-й мк-р, Октябрьский район, столица
              Бишкек,
            </p>
            <div className={styles.icons}>
              <a className={styles.iconLink} href="#">
                <InstaIcon /> @bono.bar.bishkek
              </a>
              <a className={styles.iconLink} href="#">
                <span>
                  <TwogisIcon /> 2гис
                </span>
                ссылка на 2гис
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
