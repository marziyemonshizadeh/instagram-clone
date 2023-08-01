import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getPostsFromServer = createAsyncThunk(
  "posts/getPostsFromServer",
  async (url) => {
    return apiRequests
      .get(url)
      .then((res) => res.data)
      .catch((err) => {
        console.log("err:", err);
      });
  }
);
export const removePostsFromServer = createAsyncThunk(
  "posts/removePostsFromServer",
  async (id) => {
    return apiRequests.delete(`/posts/${id}`);
  }
);
export const addPostsFromServer = createAsyncThunk(
  "posts/addPostsFromServer",
  async (userName, caption, imgUrl) => {
    return apiRequests
      .post("/posts/", userName, caption, imgUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPostsFromServer.fulfilled, (state, action) => {
      console.log("state  fulfilled :", state);
      console.log("action  fulfilled:", action);
      return action.payload;
    }),
      builder.addCase(removePostsFromServer.fulfilled, (state, action) => {
        // console.log("state remove fulfilled :",state);
        // console.log("action remove fulfilled:",action.payload.data);
        const newPosts = state.filter((post) => post.id !== action.meta.arg);
        return newPosts;
      }),
      builder.addCase(addPostsFromServer.fulfilled, (state, action) => {
        console.log("state post fulfilled :", state);
        console.log("action post fulfilled:", action);
      });
  },
});
export default slice.reducer;
