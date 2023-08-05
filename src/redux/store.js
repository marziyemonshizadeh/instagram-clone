import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from "../redux/store/posts/comments";
import postsReducer from "../redux/store/posts/posts";
import storiesReducer from "../redux/store/story/story";
import productsReducer from "./store/shopping/products";
// import storeReducer from '../redux/storeResourse/store.js';

export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    products: productsReducer,
    stories: storiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
