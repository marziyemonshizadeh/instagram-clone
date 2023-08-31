import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getPostsFromServer = createAsyncThunk(
  "posts/getPostsFromServer",
  async (url) => {
    return apiRequests
      .get(url)
      .then((res) => res.data)
      .catch((err) => {
        swal({
          title:
            "please run 'npx json-server --watch mydb.json --port 3001' in your terminal",
          text: "You clicked the button!",
          icon: "warning",
          button: "got it!",
        });
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
  async (values) => {
    return apiRequests
      .post("/posts/", values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("can't add post:(", error);
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
