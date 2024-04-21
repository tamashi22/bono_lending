import React from "react";
import Logo from "images/logo.png";
import styles from "./AppFooter.module.scss";

import UpIcon from "icons/upArrow.svg?react";
import InstaIcon from "icons/instagram.svg?react";
import Telegram from "icons/telegram.svg?react";
import Facebook from "icons/facebook.svg?react";
import TikTok from "icons/tiktok.svg?react";
import YouTube from "icons/youtube.svg?react";
const AppFooter = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.logo}>
              <img src={Logo} alt="logo" />
              <a className={styles.up} href="#header">
                <UpIcon />
                Вверх
              </a>
            </div>
            <div className={styles.links}>
              <h2 className={styles.title}>/ Адрес:</h2>

              <a href="#" className={styles.item}>
                карта 2гис
              </a>
              <a href="#" className={styles.item}>
                Карта Google
              </a>
              <a href="#" className={styles.item}>
                Доставка
              </a>
            </div>
            <div className={styles.links}>
              <h2 className={styles.title}>/ Позвоните нам:</h2>
              <a href="#" className={styles.item}>
                +996 501 06 55 05
              </a>
              <a href="#" className={styles.item}>
                +996 501 06 55 05
              </a>
              <a href="#" className={styles.item}>
                +996 501 06 55 05
              </a>
            </div>
            <div className={styles.links}>
              <h2 className={styles.title}>/ Пишите нам:</h2>
              <a href="#" className={styles.item}>
                боно2gmail.com
              </a>
              <a href="#" className={styles.item}>
                боно2gmail.com
              </a>
              <a href="#" className={styles.item}>
                боно2gmail.com
              </a>
            </div>
            <div className={styles.links}>
              <h2 className={styles.title}>/ Навигации по страницам:</h2>
              <a href="#" className={styles.item}>
                Главный экран
              </a>
              <a href="#about" className={styles.item}>
                О нас
              </a>
              <a href="#contact" className={styles.item}>
                Контакты
              </a>
              <a href="#reservation" className={styles.item}>
                Бронь столика
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.under}>
        <div className="container">
          <div className={styles.wrap}>
            <p className={styles.rights}>
              © 2024 год, Bono bar . Все права защищены.
            </p>
            <div className={styles.icons}>
              <InstaIcon />
              <Telegram />
              <Facebook />
              <TikTok />
              <YouTube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
