import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import registerSchema from "../../Validations/signUpRegister";
import LogoImg from "../../components/responsiveLogo/responsiveLogo";

// import Facebook from '../src/images/facebook.png'
import { useDispatch } from "react-redux";
import { addUsersFromServer } from "../../redux/store/users/users";
import "./signup.css";

const SignUp = () => {
  // axios cancelling
  const abortController = new AbortController();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      userName: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Inputs Data =>", values);
      setTimeout(() => {
        setSubmitting(false);
      }, 8000);
      dispatch(addUsersFromServer(values));
      if (setSubmitting) {
        setTimeout(() => navigate("/main"), 3000);
      }
    },
    validationSchema: registerSchema,
  });
  // useEffect(() => {
  //   setTimeout(() => navigate("/main"), 3000);
  // });
  return (
    <div className="text-center px-4 py-4 clr">
      <form
        className="col-lg-6 col-md-5 col-10 mx-auto cart-style p-3 px-5 clearfix"
        onSubmit={form.handleSubmit}
      >
        <LogoImg />
        <div className="d-flex flex-column gap-2 text-center">
          <button className="btn btn-primary mt-2 fw-bold" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook me-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <span>Log in with Facebook</span>
          </button>
          <div className="articles_txt">or</div>
          <div className="form-floating text-muted">
            <input
              type="email"
              name="email"
              className="form-control form-style"
              id="floatingInput"
              placeholder="name@example.com"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput">email</label>
          </div>
          {form.errors.email && form.touched.email && (
            <div className="text-danger">{form.errors.email}</div>
          )}

          <div className="form-floating text-muted">
            <input
              type="text"
              name="fullName"
              className="form-control form-style"
              id="floatingInput"
              placeholder="12345678"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          {form.errors.fullName && form.touched.fullName && (
            <div className="text-danger">{form.errors.fullName}</div>
          )}

          <div className="form-floating text-muted">
            <input
              type="text"
              name="userName"
              className="form-control form-style"
              id="floatingInput"
              placeholder="12345678"
              value={form.values.userName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput">UserName</label>
          </div>
          {form.errors.userName && form.touched.userName && (
            <div className="text-danger">{form.errors.userName}</div>
          )}

          <div className="form-floating text-muted">
            <input
              type="password"
              name="password"
              className="form-control form-style"
              id="floatingInput"
              placeholder="12345678"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput">Password</label>
          </div>
          {form.errors.password && form.touched.password && (
            <div className="text-danger">{form.errors.password}</div>
          )}
          <button
            className="btn btn-primary mt-2 fw-bold"
            type="submit"
            disabled={form.isSubmitting}
          >
            {form.isSubmitting ? "Loading..." : "Sign Up"}
          </button>
          <p className="text-muted">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </div>
      </form>
      <div className="col-lg-6 col-md-5 col-10 mx-auto cart-style pt-4 mt-3 p-3 mb-3">
        Do you have an account?{" "}
        <Link to="/login" className="text-decoration-none">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
