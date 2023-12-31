import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const users = useSelector((state) => state.users);
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="card p-5"
        style={{ width: 800, backgroundColor: "#f9fcfec5" }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
          alt="nn"
          width={150}
          height={150}
          className="mx-auto mb-3 bd-placeholder-img rounded-circle"
        />
        <div className="d-md-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">USERNAME</p>
          <p style={{ color: "#F22390" }}>{users.userName}</p>
        </div>
        <div className="d-md-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">FULLNAME</p>
          <p style={{ color: "#F22390" }}>{users.fullName}</p>
        </div>
        <div className="d-md-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">EMAIL</p>
          <p style={{ color: "#F22390" }}>{users.email}</p>
        </div>
        <div className="d-md-flex justify-content-between p-3 border-bottom border-dark-subtle">
          <p className="fw-bold text-muted">PASSWORD</p>
          <p style={{ color: "#F22390" }}>{users.password}</p>
        </div>
      </div>
    </div>
  );
}
