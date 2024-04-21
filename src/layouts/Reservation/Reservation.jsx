import React from "react";
import clsx from "clsx";

import styles from "./Reservation.module.scss";
import { ReservationForm } from "../../components/ReservationForm";

const Reservation = () => {
  return (
    <section id="reservation" className={styles.wrapper}>
      <h2 className={styles.title}>Бронирование столика</h2>
      <ReservationForm />
    </section>
  );
};

export default Reservation;
