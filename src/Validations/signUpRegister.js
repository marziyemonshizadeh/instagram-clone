import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  password: Yup.string().min(4).max(30).required(),
  email: Yup.string().email().min(8).max(35).required(),
  fullName: Yup.string().min(3).max(30).required(),
  userName: Yup.string().min(5).max(30).required(),
});

export default registerSchema;
