import React from "react";
import clsx from "clsx";
import Fork from "icons/fork.svg?react";
import Building from "icons/building.svg?react";
import Bell from "icons/bell.svg?react";
import styles from "./About.module.scss";

const About = ({ picture, reverse }) => {
  return (
    <section id="about" className={styles.wrapper}>
      <div className="container">
        <div className={clsx(styles.content, reverse && styles.reverse)}>
          <img src={picture} className={styles.image} />

          <div className={styles.textContainer}>
            <div className={styles.item}>
              <div className={styles.title}>
                <Fork />
                Кухня
              </div>
              <p className={styles.description}>
                Современной кухни в Бишкеке с исключительным подходом к выбору
                продуктов. Минимум полуфабрикатов и максимум ручной работы: мы
                сами замешиваем тесто для пасты, варим сыры, выращиваем зелень и
                даже делаем свой тоник для коктейлей.
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>
                <Building />
                Заведения
              </div>
              <p className={styles.description}>
                Два этажа заведения поделены на семейную зону с открытой кухней
                и коктейльную зону с барной стойкой, диджеем и просторной
                террасой.
              </p>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>
                <Bell />
                Бронирования
              </div>
              <p className={styles.description}>
                Мы готовы Вам помочь с выбором необходимого для проведения
                мероприятия или встречи. Подберем для Вас и для Ваших гостей
                изысканное блюда которые буду соответствовать вашему мероприятию
                и приятное локация с видом на город.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
