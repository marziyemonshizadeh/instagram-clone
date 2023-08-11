import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeCommentsFromServer } from "../../redux/store/posts/comments";

export default function Comment({ userName, text, id }) {
  const dispatch = useDispatch();
  const handleDeleteComment = (e) => {
    e.preventDefault();
    swal({
      title: "confirm delete comment ???",
      icon: "warning",
      buttons: ["no", "yes!"],
    }).then((result) => {
      if (result) {
        dispatch(removeCommentsFromServer(id));
        swal({
          title: "The post has been successfully deleted:)",
          icon: "success",
          buttons: "ok",
        });
      }
    });
  };
  return (
    <li className="d-flex justify-content-between">
      <div className="my-1">
        <span className="fw-bold me-2">{userName}</span>
        {text}
      </div>
      <BsTrash3Fill onClick={handleDeleteComment} />
    </li>
  );
}
