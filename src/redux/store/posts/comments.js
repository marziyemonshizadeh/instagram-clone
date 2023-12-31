import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getPostCommentsFromServer = createAsyncThunk(
  "comments/getPostCommentsFromServer",
  async (id) => {
    return apiRequests
      .get(`posts/${id}/comments`)
      .then((res) => res.data)
      .catch((err) => {
        console.log("comment not found :", err);
      });
  }
);
export const removeCommentsFromServer = createAsyncThunk(
  "comments/removeCommentsFromServer",
  async (id) => {
    return apiRequests.delete(`/comments/${id}`);
  }
);
export const addCommentsFromServer = createAsyncThunk(
  "comments/addCommentsFromServer",
  async (values) => {
    return apiRequests
      .post("/comments/", values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
const slice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPostCommentsFromServer.fulfilled, (state, action) => {
      console.log("state comment found fulfilled :", state);
      console.log("action comment found fulfilled :", action.payload);
      return action.payload;
      // state.push(...action.payload);
    }),
      builder.addCase(removeCommentsFromServer.fulfilled, (state, action) => {
        // console.log("state remove fulfilled :",state);
        // console.log("action remove fulfilled:",action.payload.data);
        const newComments = state.filter(
          (comments) => comments.id !== action.meta.arg
        );
        return newComments;
      }),
      builder.addCase(addCommentsFromServer.fulfilled, (state, action) => {
        console.log("state comment add fulfilled :", state);
        console.log("action comment add fulfilled:", action);
        return action.payload;
      });
  },
});
export default slice.reducer;
