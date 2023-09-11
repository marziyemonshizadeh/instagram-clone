import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts/post";
import Story from "../../components/story/story";
import { getLikesFromServer } from "../../redux/store/posts/likes";
const Likes = () => {
  const likes = useSelector((state) => state.likes);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log("likes:", likes);

  useEffect(() => {
    dispatch(getLikesFromServer(users.id));
  }, []);
  return (
    <>
      <Story />
      {likes.map((post) => (
        <Posts key={post.id} {...post} liked={true} />
      ))}
    </>
  );
};

export default Likes;
