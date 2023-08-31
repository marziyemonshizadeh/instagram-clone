import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoPersonRemove } from "react-icons/io5";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import InstagramLogo from "../../assets/Instagram_Logo.png";
import { LogOut, removeUsersFromServer } from "../../redux/store/users/users";
import "../sidebar/sidebar.css";
import sidebarItems from "./sidebarItems";

export default function sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Delete");
    swal({
      title: "Are you sure you want to delete your account ???",
      icon: "warning",
      buttons: ["no", "yes!"],
    }).then((result) => {
      if (result) {
        dispatch(removeUsersFromServer(4));
        swal({
          title: "The post has been successfully deleted:)",
          icon: "success",
          buttons: "ok",
        });
        setTimeout(() => navigate("/"), 1000);
      }
    });
  };
  return (
    <div className="sticky-top sidebar w-auto ps-md-2">
      <header>
        <img
          src={InstagramLogo}
          className="rounded img-fluid m-1 ms-md-2 mt-4 img d-xl-block d-none"
          alt="instagramLogo"
          width={150}
        />
      </header>
      <main className="nav d-flex justify-content-between flex-column mb-auto mt-1 mx-1">
        <div>
          {sidebarItems.map((i, index) => {
            return (
              <li
                className="nav-item sidebarItems"
                key={index}
                data-bs-toggle="tooltip"
                title={i.text}
              >
                <Link
                  to={i.to}
                  className="d-flex align-items-center py-md-3 py-3 px-2 rounded-3  overflow-hidden"
                  onClick={() => {
                    if (i.text == "Log out") {
                      dispatch(LogOut());
                      console.log("log out clicked");
                    }
                  }}
                >
                  <i.icon className="icons me-md-2 me-3" />
                  <span className="d-md-block d-none">{i.text}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-item sidebarItems" data-bs-toggle="tooltip">
            <Link
              to="#"
              className="d-flex align-items-center py-md-3 py-3 px-2 rounded-3  overflow-hidden"
              onClick={handleClick}
            >
              <IoPersonRemove className="icons me-md-2 me-3" />
              <span className="d-md-block d-none">Delete</span>
            </Link>
          </li>
        </div>
      </main>
    </div>
  );
}
