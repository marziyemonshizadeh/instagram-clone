import React from "react";

export default function Profile() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-5" style={{ width: 800 }}>
        <svg
          className="mx-auto mb-3 bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <div className="d-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">USERNAME</p>
          <p>Marzieh</p>
        </div>
        <div className="d-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">FULLNAME</p>
          <p>marziehkarimi</p>
        </div>
        <div className="d-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">EMAIL</p>
          <p>marzieh@yahoo.com</p>
        </div>
        <div className="d-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">PASSWORD</p>
          <p>123456789</p>
        </div>
      </div>
    </div>
  );
}
