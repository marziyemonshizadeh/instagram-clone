import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from "../redux/store/posts/comments";
import likesReducer from "../redux/store/posts/likes";
import postsReducer from "../redux/store/posts/posts";
import storiesReducer from "../redux/store/story/story";
import usersReducer from "../redux/store/users/users";
import productsReducer from "./store/shopping/products";
// import storeReducer from '../redux/storeResourse/store.js';

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
    products: productsReducer,
    stories: storiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
