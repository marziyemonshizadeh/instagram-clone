import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCheck, FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { TfiMoreAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import Comment from "../comments/comment";

import {
  addCommentsFromServer,
  getPostCommentsFromServer,
} from "../../redux/store/posts/comments";
import { removePostsFromServer } from "../../redux/store/posts/posts";
import LazyImg from "../lazyLoadImg/lazyLoadImg";

import {
  addLikesFromServer,
  removeLikesFromServer,
} from "../../redux/store/posts/likes";
import "./post.css";

const Post = ({ userName, caption, imgUrl, id, liked }) => {
  // states
  const [like, setLike] = useState(true);
  const [save, setSave] = useState(true);
  const [addNewComment, setAddNewComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showCommentBtn, setShowCommentBtn] = useState(true);
  const [drapDown, setDrapDown] = useState(false);

  const dispatch = useDispatch();
  const getComment = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  console.log(getComment);
  console.log(users);

  const resetBtn = () => {
    setShowCommentInput(false);
    setAddNewComment("");
  };
  const handleDeletePost = (e) => {
    e.preventDefault();
    swal({
      title: "confirm delete posts ???",
      icon: "warning",
      buttons: ["no", "yes!"],
    }).then((result) => {
      if (result) {
        dispatch(removePostsFromServer(id));
        swal({
          title: "The post has been successfully deleted:)",
          icon: "success",
          buttons: "ok",
        });
      } else {
        setDrapDown((prev) => !prev);
      }
    });
  };
  return (
    <div className="card mx-md-auto  mt-2">
      {/* header */}
      <header className="card-title d-flex justify-content-between flex-row align-items-center mt-1">
        <div className="d-flex flex-row align-items-center">
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
          <p className="fw-bold">{userName}</p>
          <BsPatchCheckFill className="mt-1 ms-1 bluetick" />
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn"
            data-bs-toggle="dropdown"
            onClick={() => {
              setDrapDown((prev) => !prev);
              console.log(drapDown);
            }}
          >
            <TfiMoreAlt className="me-2" />
          </button>
          {drapDown && (
            <ul
              className="z-3 position-absolute border border-1"
              style={{ backgroundColor: "white" }}
            >
              <li className="p-2 rounded">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={handleDeletePost}
                >
                  Delete
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
      {/* image */}
      <LazyImg
        src={imgUrl}
        alt="post"
        className="img-fluid object-fit-contain"
      />

      {/* caption */}
      <div className="m-2">
        <div className="d-flex justify-content-between mt-1">
          {/* like comment sant icons*/}
          <div className="d-flex gap-2">
            {liked ? (
              <></>
            ) : (
              <FaRegHeart
                className={like ? "d-block" : "d-none"}
                onClick={() => {
                  console.log("like");
                  dispatch(
                    addLikesFromServer({
                      userId: users.id,
                      postId: id,
                    })
                  );
                  setLike(!like);
                }}
              />
            )}

            {liked ? (
              <FaHeart className="heart" />
            ) : (
              <FaHeart
                className={!like ? "heart d-block zoom-in-zoom-out" : "d-none"}
                onClick={() => {
                  console.log("unlike");
                  dispatch(
                    removeLikesFromServer({
                      userId: users.id,
                      postId: id,
                    })
                  );
                  setLike(!like);
                }}
              />
            )}

            <FaRegComment
              className={showCommentInput ? "zoom-in-zoom-out" : ""}
              onClick={() => setShowCommentInput((prev) => !prev)}
            />
            <LuSend />
          </div>
          {/* save icons*/}
          <RiBookmarkLine
            className={save ? "d-block" : "d-none"}
            onClick={() => setSave(!save)}
          />
          <RiBookmarkFill
            className={!save ? "d-block zoom-in-zoom-out" : "d-none"}
            onClick={() => setSave(!save)}
          />
        </div>
        {/* caption text */}
        <div className="card-text user-select-none mt-2 mb-1">
          <span className="fw-bold me-2">{userName}</span>
          {caption}
        </div>
        {getComment.map(
          (comment) =>
            comment.postId == id && (
              <Comment
                userName={comment.userName}
                text={comment.text}
                id={comment.id}
                key={comment.id}
              />
            )
        )}
        {/* post's comments */}
        {showCommentBtn && (
          <div className="d-flex justify-content-end fw-bold text-semibold text-muted me-2 mb-2">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                dispatch(getPostCommentsFromServer(id));
                setShowCommentBtn((prev) => !prev);
              }}
            >
              Show Post's Comments
            </button>
          </div>
        )}

        {/* add comments */}
        <div className={showCommentInput ? "d-block" : "d-none"}>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Add a comment for this post"
            value={addNewComment}
            onChange={(event) => {
              setAddNewComment(event.target.value);
            }}
          />
          <div className="d-flex justify-content-end mt-2">
            <MdCancel
              className="me-1 cancel"
              onClick={() => {
                resetBtn();
              }}
            />
            <FaCheck
              className="success"
              onClick={() => {
                dispatch(
                  addCommentsFromServer({
                    userName: "Unknown",
                    text: addNewComment,
                    postId: id,
                  })
                );
                resetBtn();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
