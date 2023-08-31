import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
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
        swal({
          title:
            "!!! please run 'npx json-server --watch mydb.json --port 3001' in your terminal !!!",
          text: "You clicked the button!",
          icon: "warning",
          button: "got it!",
        });
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
  reducers: {
    LogOut: (state) => {
      state.users = null;
      state.users.userName = null;
    },
  },

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
export const { LogOut } = slice.actions;
export default slice.reducer;
