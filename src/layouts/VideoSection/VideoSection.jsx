import React from "react";
import clsx from "clsx";
import Video from "images/video.jpg";
import styles from "./VideoSection.module.scss";

const VideoSection = () => {
  return (
    <section id="VideoSection" className={styles.wrapper}>
      <div className={styles.videoWrapper}>
        <img src={Video} alt="video" className={styles.video} />
      </div>
    </section>
  );
};

export default VideoSection;
