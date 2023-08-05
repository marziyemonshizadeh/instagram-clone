import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  caption: Yup.string("please write somthing").min(4).max(120).required(),
  imgUrl: Yup.string("please choose an image").required(),
});

export default registerSchema;
