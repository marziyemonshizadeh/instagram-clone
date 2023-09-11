import { useFormik } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import registerSchema from "../../Validations/loginRegister";
import InstagramLogo from "../../components/instagramLogo/instagramLogo";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServer } from "../../redux/store/users/users";
import "./login.css";

const LogIn = () => {
  // usf
  const [isReCaptchaVerify, setIsReCaptchaVerify] = useState(false);
  const navigate = useNavigate();
  // const abortController = new AbortController();
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.users);

  const form = useFormik({
    initialValues: {
      name: "Marzieh",
      password: "123456789",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Inputs Data =>", values);
      setTimeout(() => {
        setSubmitting(false);
      }, 8000);
      dispatch(
        getUsersFromServer(
          `/users?userName=${values.name}&&password=${values.password}`
        )
      );
    },
    validationSchema: registerSchema,
  });
  // redirect authenticated user to home page
  useEffect(() => {
    if (userName) {
      swal({
        title: `Dear ${userName} welcome to instagram :)`,
        text: "You clicked the button!",
        icon: "success",
        button: "ok!",
      });
      setTimeout(() => navigate("/main"), 3000);
    }
  }, [navigate, userName]);

  const verifyReCaptchaHandler = () => {
    setIsReCaptchaVerify(true);
  };

  return (
    <div className="text-center px-4 py-4">
      <form
        onSubmit={form.handleSubmit}
        className="col-lg-6 col-md-5 col-10 mx-auto cart-style p-4 px-5 clearfix"
      >
        <InstagramLogo />
        <div className="d-flex flex-column cart-body gap-2 text-center mt-5">
          <div className="form-floating text-muted">
            <input
              type="text"
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="form-control form-style"
              id="floatingInput1"
              placeholder="username"
            />
            <label htmlFor="floatingInput1">username</label>
            {form.errors.name && form.touched.name && (
              <div className="text-danger">{form.errors.name}</div>
            )}
          </div>
          <div className="form-floating text-muted">
            <input
              type="password"
              name="password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="form-control form-style"
              id="floatingInput2"
              placeholder="12345678"
            />
            <label htmlFor="floatingInput2">Password</label>
            {form.errors.password && form.touched.password && (
              <div className="text-danger">{form.errors.password}</div>
            )}
          </div>
          <ReCAPTCHA
            className="d-flex justify-content-center"
            size="compact"
            // size="normal"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={verifyReCaptchaHandler}
          />
          <button
            type="submit"
            className="btn btn-primary mt-2 fw-bold"
            disabled={!isReCaptchaVerify || form.isSubmitting}
          >
            {form.isSubmitting ? "Loading..." : "Log In"}
          </button>
          <Link to="/main" className="text-decoration-none mx-2 dark">
            Forget Password?
          </Link>
        </div>
      </form>

      <div className="col-lg-6 col-md-5 col-10 mx-auto cart-style pt-4 mt-3 p-3 mb-3">
        Don't have an account?{" "}
        <Link to="/signup" className="text-decoration-none">
          Sign up
        </Link>
      </div>
      <p className="fw-bold">Get the app.</p>
      <div className="d-flex justify-content-center mt-3 gap-2">
        <Link to="/">
          <BsGooglePlay />
        </Link>
        <Link to="/main">
          <BsApple />
        </Link>
      </div>
      <footer className="col-lg-6 col-md-5 col-5 d-md-block d-none mx-auto pt-4 mt-3 p-3 mb-3">
        <div className="row row-cols-lg-6 row-cols-md-5 row-cols-3">
          <Link to="#" className="text-decoration-none dark">
            ABOUT US
          </Link>
          <Link to="#" className="text-decoration-none dark">
            SUPPORT
          </Link>
          <Link to="#" className="text-decoration-none dark">
            BLOG
          </Link>
          <Link to="#" className="text-decoration-none dark">
            PRESS
          </Link>
          <Link to="#" className="text-decoration-none dark">
            API
          </Link>
          <Link to="#" className="text-decoration-none dark">
            JOBS
          </Link>
        </div>
        <div className="row row-cols-lg-4 row-cols-md-4 row-cols-2 mt-2">
          <Link to="#" className="text-decoration-none dark">
            PRIVACY
          </Link>
          <Link to="#" className="text-decoration-none dark">
            TERMS
          </Link>
          <Link to="#" className="text-decoration-none dark">
            DIRECTORY
          </Link>
          <Link to="#" className="text-decoration-none dark">
            LANGUAGE
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LogIn;
