import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Pagination } from "swiper/modules";
import Arrow from "icons/arrow.svg?react";
import styles from "./PhotoGallery.module.scss";

const PhotoGallery = ({ images }) => {
  const [swiper, setSwiper] = React.useState();
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  React.useEffect(() => {
    if (swiper) {
      swiper.on("reachBeginning", () => setIsAtStart(true));
      swiper.on("reachEnd", () => setIsAtEnd(true));
      swiper.on("fromEdge", () => {
        setIsAtStart(false);
        setIsAtEnd(false);
      });
    }
  }, [swiper]);
  return (
    <section id="PhotoGallery" className={styles.wrapper}>
      <div className={styles.navigation}>
        <button
          className={clsx(styles.arrowButton)}
          onClick={() => swiper?.slidePrev()}
        >
          <Arrow />
        </button>
        <h1>Фотогалерея</h1>
        <button
          className={clsx(styles.arrowButton, styles.next)}
          onClick={() => swiper?.slideNext()}
        >
          <Arrow />
        </button>
      </div>
      <div className={styles.content}>
        <Swiper
          modules={[Controller, Autoplay, Pagination]}
          className={styles.swiper}
          onSwiper={setSwiper}
          slidesPerView="auto"
          spaceBetween={15}
          loop
        >
          {images.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              <img src={item} alt="gallery" className={styles.image}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PhotoGallery;
