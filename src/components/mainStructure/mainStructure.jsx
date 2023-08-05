import React from "react";
import { Outlet } from "react-router-dom";

import ScrollToDown from "../scrollToDown/scrollToDown";
import ScrollToTop from "../scrollToTop/scrollToTop";
import Sidebar from "../sidebar/sidebar";

import "./mainStructure.css";

function Main() {
  return (
    <div className="row overflow-hidden w-100">
      <section className="col-2">
        <Sidebar />
      </section>
      <section className="col-10 mb-3 overflow-hidden">
        <Outlet />
        <ScrollToDown />
        <ScrollToTop />
      </section>
    </div>
  );
}

export default Main;
