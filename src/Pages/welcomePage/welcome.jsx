import React from "react";
import { Link } from "react-router-dom";
import LazyImg from "../../components/lazyLoadImg/lazyLoadImg";

import metaLogo from "../../assets/Instagram-Meta-Logo-PNG-1.png";
import InstagramLogo from "../../assets/Instagram_Logo.png";
import "./welcome.css";

function welcome() {
  return (
    <div className="App">
      <header className="d-flex justify-content-center py-3">
        <select
          className="form-select form-select-sm mb-3 select"
          width={50}
          aria-label=".form-select-md "
        >
          <option defaultValue>English</option>
          <option value="1">persian</option>
          <option value="2">Turkish</option>
          <option value="3">germany</option>
        </select>
      </header>

      <main className="text-center px-4 py-5 my-5">
        <LazyImg
          src={InstagramLogo}
          alt="instagramLogo"
          width={250}
          height={70}
        />
        <div className="col-lg-6 mx-auto mt-4">
          <p className="lead mb-4 fw-normal">
            Sign up to see
            <Link to="/" className="text-decoration-none mx-2">
              photos
            </Link>
            and
            <Link to="/" className="text-decoration-none mx-2">
              videos
            </Link>
            videos from your friends.
          </p>
          <button type="button" className="btn btn-primary btn-lg px-5 gap-3">
            <Link
              to="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT"
              className="text-decoration-none mx-2 lightText"
            >
              Get the Instagram app
            </Link>
          </button>
          <p className="lead mt-4">
            <Link to="/login" className="text-decoration-none mx-2">
              <b>Log in</b>
            </Link>
            or
            <Link to="/signup" className="text-decoration-none mx-2">
              <b>sign up</b>
            </Link>
          </p>
        </div>
      </main>

      <footer className="footer fixed-bottom text-center py-5">
        <div className="d-flex flex-column">
          <div className="px-1">from</div>
          <div className="px-1">
            <LazyImg src={metaLogo} alt="metaLogo" width={110} height={40} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default welcome;
