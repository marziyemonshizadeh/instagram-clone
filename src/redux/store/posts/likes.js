import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getLikesFromServer = createAsyncThunk(
  "likes/getLikesFromServer",
  async (id) => {
    return apiRequests
      .get(`users/${id}/likes`)
      .then((res) => res.data)
      .catch((err) => {
        console.log("comment not found :", err);
      });
  }
);
export const removeLikesFromServer = createAsyncThunk(
  "likes/removeLikesFromServer",
  async (values) => {
    console.log(`users/${values.userId}/likes?postId=${values.postId}`);
    return apiRequests.delete(
      `users/${values.userId}/likes?postId=${values.postId}`
    );
  }
);
export const addLikesFromServer = createAsyncThunk(
  "likes/addLikesFromServer",
  async (values) => {
    return apiRequests
      .post("/likes/", values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
const slice = createSlice({
  name: "likes",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getLikesFromServer.fulfilled, (state, action) => {
      console.log("state comment found fulfilled :", state);
      console.log("action comment found fulfilled :", action.payload);
      return action.payload;
      // state.push(...action.payload);
    }),
      builder.addCase(removeLikesFromServer.fulfilled, (state, action) => {
        // console.log("state remove fulfilled :",state);
        // console.log("action remove fulfilled:",action.payload.data);
        const newComments = state.filter(
          (comments) => comments.id !== action.meta.arg
        );
        return newComments;
      }),
      builder.addCase(addLikesFromServer.fulfilled, (state, action) => {
        console.log("state comment add fulfilled :", state);
        console.log("action comment add fulfilled:", action);
        return action.payload;
      });
  },
});
export default slice.reducer;
