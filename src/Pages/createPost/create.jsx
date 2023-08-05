import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";
import registerSchema from "../../Validations/creatPostRegister";

// import { addPostsFromServer } from "../../redux/store/posts/posts";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostsFromServer } from "../../redux/store/posts/posts";
import "./create.css";

const Create = () => {
  //   const fileRef = useRef(null);
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ userName: "try", caption: "", imgUrl: "" }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
          console.log("caption =", values.caption);
          console.log("imgUrl =", values.imgUrl);
          return dispatch(addPostsFromServer(values));
        }}
      >
        {(formik) => (
          <Form className="card mx-auto mt-5" style={{ maxWidth: 1024 }}>
            {/* cart header */}
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
            <div className="card-body">
              {/* image */}
              <div className="change-profile-input-box">
                <img
                  src={preview}
                  alt="img "
                  className={`object-fit-fill ${preview ? null : "d-none"}`}
                />
                <input
                  id="imgUrl"
                  name="imgUrl"
                  type="file"
                  className="mx-auto"
                  onChange={(event) => {
                    let reader = new FileReader();
                    reader.onload = () => {
                      if (reader.readyState === 2) {
                        setPreview(reader.result);
                        formik.setFieldValue("imgUrl", reader.result);
                      }
                    };
                    reader.readAsDataURL(event.currentTarget.files[0]);
                    formik.setFieldValue("imgUrl", "preview");
                    console.log("imgUrl", preview);
                  }}
                />
                {formik.errors.imgUrl && formik.touched.imgUrl && (
                  <div className="text-danger d-flex justify-content-end">
                    {formik.errors.imgUrl}
                  </div>
                )}
              </div>
              {/* <input type="file" name="file" /> */}
              {/* textarea */}
              <div className="card-text mb-3">
                <label htmlFor="caption" className="form-label">
                  caption
                </label>
                <Field
                  as="textarea"
                  id="caption"
                  name="caption"
                  className="form-control"
                />
              </div>
              {formik.errors.caption && formik.touched.caption && (
                <div className="text-danger d-flex justify-content-end">
                  {formik.errors.caption}
                </div>
              )}
              {console.log(formik)}
              <div className="d-flex flex-row-reverse gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-success"
                  disable={formik.dirty && formik.isSubmitting}
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Create;
