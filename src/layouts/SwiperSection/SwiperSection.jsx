import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Pagination } from "swiper/modules";
import clsx from "clsx";
import { AppHeader } from "../../components/AppHeader";
import SliderImage from "images/sliderImage1.jpg";
import Arrow from "icons/arrow.svg?react";
import Trigger from "images/trigger.png";
import styles from "./SwiperSection.module.scss";

import { AppButton } from "../../components/ui/AppButton";

const SwiperSection = () => {
  const [swiper, setSwiper] = React.useState();
  const [currentNumber, setCurrentNumber] = React.useState(1);
  return (
    <div className={styles.wrapper}>
      <AppHeader className={styles.head} />
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        className={styles.swiper}
        onSwiper={setSwiper}
        onSlideChange={(e) => {
          setCurrentNumber(e.realIndex + 1);
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={300}
        loop
      >
        {new Array(5).fill(0).map((item, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <img src={SliderImage} className={styles.image} />
            <div className={styles.content}>
              <div className={"container"}>
                <div className={styles.container}>
                  <button
                    className={clsx(styles.arrowButton)}
                    onClick={() => swiper?.slidePrev()}
                  >
                    <Arrow />
                  </button>
                  <div className={styles.text}>
                    <p> Выделяесь среди других </p>
                    <h2>
                      <span>bono </span>- Коктейльный бар и ресторан приглашает
                      к себе
                    </h2>
                    <AppButton
                      className={styles.bannerBtn}
                      onClick={() => window.location.replace("/#reservation")}
                    >
                      Забронировать стол
                    </AppButton>
                  </div>
                  <button
                    className={clsx(styles.arrowButton, styles.next)}
                    onClick={() => swiper?.slideNext()}
                  >
                    <Arrow />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="#reservation" className={styles.trigger}>
        <img src={Trigger} alt="trigger" className={styles.triggerImg} />
      </a>
      <div className={styles.swiperPagination}>
        <div className={styles.paginationContainer}>
          {Array.from({ length: swiper?.slides?.length ?? 1 }, (_, index) => (
            <div
              key={index}
              className={clsx(
                styles.swiperPaginationBullet,
                currentNumber === index + 1 &&
                  styles.swiperPaginationBulletActive
              )}
              onClick={() => {
                swiper.slideTo(index);
                setCurrentNumber(index + 1);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperSection;
