import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTop.css";

function scrollToTop() {
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
        <button
          onClick={scrollUp}
          id="btn-back-to-top"
          className="rounded-circle d-flex align-items-center flex-column text-light justify-content-center border-0 shadow"
        >
          <FaArrowUp className="shadow-sm" />
        </button>
      )}
    </>
  );
}

export default scrollToTop;
