import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiAddToQueue, BiStore } from "react-icons/bi";
import { BsBoxArrowRight, BsCart3, BsInfoCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { RiBookmarkLine } from "react-icons/ri";
import InstagramLogo from "../../assets/Instagram_Logo.png";
// import DarkMood from "../darkLightBtn/Btn";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { removeUsersFromServer } from "../../redux/store/users/users";
import "../sidebar/sidebar.css";

export default function sidebar() {
  const sidebarItems = [
    { icon: MdHomeFilled, text: "Home", to: "/main" },
    { icon: BiStore, text: "Store", to: "/main/store" },
    // { icon: BsBoxArrowInLeft, text: "Log in", to: "/login" },
    { icon: BiAddToQueue, text: "Create", to: "/main/create" },
    { icon: BsInfoCircle, text: "AboutMe", to: "/main/aboutme" },
    { icon: RiBookmarkLine, text: "Saves", to: "#" },
    { icon: FaRegHeart, text: "Likes", to: "#" },
    { icon: CgProfile, text: "Profile", to: "/main/profile" },
    { icon: BsCart3, text: "Cart", to: "/main/cart" },
    { icon: BsBoxArrowRight, text: "Log out", to: "#" },
  ];
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
                >
                  <i.icon className="icons me-md-2 me-3" />
                  <span className="d-md-block d-none">{i.text}</span>
                </Link>
              </li>
            );
          })}
          <li
            className="nav-item sidebarItems"
            data-bs-toggle="tooltip"
            // title={Delete}
          >
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
