import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string().min(6).max(10).required(),
  password: Yup.string().min(4).max(20).required(),
});

export default registerSchema;
