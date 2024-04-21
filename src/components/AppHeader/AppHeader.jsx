import React from "react";
import clsx from "clsx";
import styles from "./AppHeader.module.scss";
import PhoneIcon from "icons/phone.svg?react";
import MailIcon from "icons/mail.svg?react";
import InstaIcon from "icons/instagram.svg?react";
import TwogisIcon from "icons/twoGis.svg?react";
import Logo from "images/logo.png";
import { AppButton } from "../ui/AppButton";
const AppHeader = ({ className }) => {
  return (
    <header className={clsx(styles.wrapper, className)} id="header">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contacts}>
            <a href="#" className={styles.link}>
              <PhoneIcon />
              +996 501 06 55 05
            </a>
            <a href="#" className={styles.link}>
              <MailIcon />
              bono51@gmail.com
            </a>
          </div>
          <div className={styles.contacts}>
            <a href="#" className={styles.link}>
              <InstaIcon />
              instagram
            </a>
            <a href="#" className={styles.link}>
              <TwogisIcon />
              2Gis
            </a>
            <AppButton>Заказать</AppButton>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={Logo} alt="logo" />
          <div className={styles.navBar}>
            <a href="#" className={styles.navBarLink}>
              Главная
            </a>
            <a href="#menu" className={styles.navBarLink}>
              Меню
            </a>
            <a href="#" className={styles.navBarLink}>
              Заказы
            </a>
            <a href="#about" className={styles.navBarLink}>
              О нас
            </a>
            <a href="#contacts" className={styles.navBarLink}>
              Контакты
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
