import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Story from "../../components/story/story";

import { BsPatchCheckFill } from "react-icons/bs";
import "./create.css";
const Create = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState();
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    // console.log("e.target.files[0]", e.target.files[0]);
    setImage(e.target.files[0]);
  };
  return (
    <>
      <Story />
      <div className="card mx-auto mt-5" style={{ maxWidth: 1024 }}>
        <div className="card-title d-flex justify-content-start flex-row align-items-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-circle mx-2 mt-1"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <p className="fw-bold">userName</p>
          <BsPatchCheckFill className="mt-1 ms-1 bluetick" />
        </div>
        {/* image */}
        <div className="change-profile-input-box" onClick={handleClick}>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "https://media.sproutsocial.com/uploads/2022/05/How-to-post-on-instagram-from-pc.jpg"
            }
            className="change-profile-pic object-fit-fill"
            alt="please press"
          />
          <input
            type="file"
            onChange={handleImageChange}
            name=""
            ref={inputRef}
            style={{ display: "none" }}
          />
        </div>
        {/* caption */}
        <div className="card-body">
          <div className="card-text mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Please Add a caption
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="d-flex flex-row-reverse gap-2 mt-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => navigate("/main")}
            >
              Send
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate("/main")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
