import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TimePicker } from "antd";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from "react-toastify";
import { AppButton } from "../ui/AppButton";
import { reservationSchema } from "./components/validationShema";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ReservationForm.module.scss";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(reservationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Бронь отправлена");
    //perform api calls etc
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.reservationForm}>
      <label className={styles.formLabel}>
        ФИО клиента
        <input
          className={styles.formInput}
          type="text"
          {...register("fullName")}
        />
        <p className={styles.error}>{errors.fullName?.message}</p>
      </label>
      <label className={styles.formLabel}>
        Номер клиента
        <InputMask
          mask="+999(999)99 99 99" //format if it needed
          className={styles.formInput}
          {...register("phoneNumber")}
        />
        <p className={styles.error}>{errors.phoneNumber?.message}</p>
      </label>
      <label className={styles.formLabel}>
        Время нахождения
        <select className={styles.formInput} {...register("duration")}>
          <option value="1">1 час</option>
          <option value="2">2 часа</option>
          <option value="3">3 часа</option>
          {/* Add more options as required */}
        </select>
        <p className={styles.error}>{errors.duration?.message}</p>
      </label>
      <label className={styles.formLabel}>
        Время брони
        <Controller
          control={control}
          name="reservationTime"
          render={({ field }) => (
            <TimePicker
              placeholder=""
              className={styles.formInput}
              format="HH:mm"
              onChange={(time) => field.onChange(time)}
              onBlur={field.onBlur}
              value={field.value}
            />
          )}
        />
        <p className={styles.error}>{errors.reservationTime?.message}</p>
      </label>
      <label className={styles.formLabel}>
        Количество гостей
        <input
          className={styles.formInput}
          type="number"
          {...register("guests")}
        />
        <p className={styles.error}>{errors.guests?.message}</p>
      </label>
      <label className={styles.formLabel}>
        Комментарий
        <textarea
          className={styles.formInput}
          {...register("comments")}
        ></textarea>
      </label>
      <AppButton
        type="submit"
        variant="outlined"
        className={styles.submitButton}
      >
        Забронировать стол
      </AppButton>
      <ToastContainer position="bottom-left" theme="dark" />
    </form>
  );
};

export default ReservationForm;
