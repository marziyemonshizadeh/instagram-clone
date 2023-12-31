import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts/post";
import Story from "../../components/story/story";
import { getPostsFromServer } from "../../redux/store/posts/posts";

export default function Home() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log("post:", posts);

  useEffect(() => {
    dispatch(getPostsFromServer("/posts?_sort=id&_order=desc"));
  }, []);
  return (
    <>
      <Story />
      {posts.map((post) => (
        <Posts key={post.id} {...post} />
      ))}
    </>
  );
}
