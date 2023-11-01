import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsersFromServer } from "../../redux/store/users/users";

import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import registerSchema from "../../Validations/signUpRegister";
import InstagramLogo from "../../components/instagramLogo/instagramLogo";

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

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "187525994700-1dj6fb425s7112894fe8v2pgm6473lah.apps.googleusercontent.com",
      callback: (response) => {
        const payload = jwtDecode(response.credential);
        console.log(payload.name);
        console.log(payload.sub);
        dispatch(
          getUsersFromServer(
            `/users?userName=${payload.name}&&password=${payload.sub}`
          )
        );
        setTimeout(() => navigate("/main"), 3000);
      },
    });
    google.accounts.id.renderButton(document.querySelector(".sign-in"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div className="text-center px-4 py-4 clr">
      <form
        className="col-lg-6 col-md-5 col-10 mx-auto cart-style p-3 px-5 clearfix"
        onSubmit={form.handleSubmit}
      >
        <InstagramLogo />
        <div className="d-flex flex-column gap-2 text-center">
          <FacebookLoginButton onClick={() => alert("Hello")} />
          <GoogleLoginButton onClick={() => alert("Hello")} />
          <div className="sign-in"></div>

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
              id="floatingInput2"
              placeholder="12345678"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput2">Full Name</label>
          </div>
          {form.errors.fullName && form.touched.fullName && (
            <div className="text-danger">{form.errors.fullName}</div>
          )}

          <div className="form-floating text-muted">
            <input
              type="text"
              name="userName"
              className="form-control form-style"
              id="floatingInput3"
              placeholder="12345678"
              value={form.values.userName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput3">UserName</label>
          </div>
          {form.errors.userName && form.touched.userName && (
            <div className="text-danger">{form.errors.userName}</div>
          )}

          <div className="form-floating text-muted">
            <input
              type="password"
              name="password"
              className="form-control form-style"
              id="floatingInput4"
              placeholder="12345678"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <label htmlFor="floatingInput4">Password</label>
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
