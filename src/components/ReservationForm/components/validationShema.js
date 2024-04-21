import * as yup from "yup";
export const reservationSchema = yup.object().shape({
  fullName: yup.string().required("Это поле обязательное"),
  phoneNumber: yup.string().required("Это поле обязательное"),
  duration: yup.string().required("Это поле обязательное"),
  reservationTime: yup.date().required("Это поле обязательное"),
  guests: yup.string().required("Это поле обязательное"),
  comments: yup.string(),
});
