import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async (url) => {
    return apiRequests
      .get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }
);
export const removeUsersFromServer = createAsyncThunk(
  "users/removeUsersFromServer",
  async (id) => {
    return apiRequests.delete(`/users/${id}`);
  }
);
export const addUsersFromServer = createAsyncThunk(
  "users/addUsersFromServer",
  async (values) => {
    return apiRequests
      .post("/users", values)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
      console.log("state  fulfilled :", state);
      console.log("action  fulfilled:", action);
      return action.payload[0];
    }),
      builder.addCase(removeUsersFromServer.fulfilled, (state, action) => {
        const newPosts = state.filter((post) => post.id !== action.meta.arg);
        return newPosts;
      }),
      builder.addCase(addUsersFromServer.fulfilled, (state, action) => {
        console.log("state add user fulfilled :", state);
        console.log("action add user fulfilled:", action);
        return action.payload;
      });
  },
});
export default slice.reducer;
