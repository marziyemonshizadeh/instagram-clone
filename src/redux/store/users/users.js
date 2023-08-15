import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async (url) => {
    return apiRequests
      .get(url)
      .then((res) => res.data)
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
    const navigate = useNavigate();
    return apiRequests
      .post(
        "/users",
        values
        //  ,{signal: abortController.setTimeout(0),}
      )
      .then((res) => {
        console.log("res", res);
        swal({
          title: `Registered successfully :)`,
          text: "You clicked the button!",
          icon: "success",
          button: "ok!",
        });
        setTimeout(() => navigate("/main"), 8000);
      })
      .catch((err) => {
        swal({
          title: `'Failed :'  ${err.message}`,
          text: "You clicked the button!",
          icon: "error",
          button: "ok!",
        });
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
      return action.payload;
    }),
      builder.addCase(removeUsersFromServer.fulfilled, (state, action) => {
        // console.log("state remove fulfilled :",state);
        // console.log("action remove fulfilled:",action.payload.data);
        const newPosts = state.filter((post) => post.id !== action.meta.arg);
        return newPosts;
      }),
      builder.addCase(addUsersFromServer.fulfilled, (state, action) => {
        console.log("state post fulfilled :", state);
        console.log("action post fulfilled:", action);
        return action.payload;
      });
  },
});
export default slice.reducer;
