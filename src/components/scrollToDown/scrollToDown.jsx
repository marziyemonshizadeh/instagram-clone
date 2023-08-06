import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./scrollToDown.css";

function scrollToTop() {
  const [backToDown, setbackToDown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackToDown(true);
      } else {
        setbackToDown(false);
      }
    });
  }, []);
  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToDown && (
        <button
          onClick={scrollDown}
          id="btn-back-to-down"
          className="rounded-circle d-flex align-items-center flex-column text-light justify-content-center border-0 shadow"
        >
          <FaArrowDown className="shadow-sm" />
        </button>
      )}
    </>
  );
}

export default scrollToTop;
