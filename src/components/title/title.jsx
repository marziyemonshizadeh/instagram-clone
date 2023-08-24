import React from "react";
import "./title.css";

function title({ children }) {
  return <h3 className="my-4 titles d-block fw-bold mt-5 fs-1">{children}</h3>;
}

export default title;
