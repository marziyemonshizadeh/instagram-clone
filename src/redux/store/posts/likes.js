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

export const removeLikesFromServer = createAsyncThunk(
  "likes/removeLikesFromServer",
  async (values) => {
    return axios
      .delete(
        `http://localhost:3001/users/${values.userId}/likes?postId=${values.postId}`
      )
      .then((res) => {
        console.log("deleted", res);
        setData(res.data);
      })
      .catch((error) => {
        console.log(
          `http://localhost:3001/users/${values.userId}/likes?postId=${values.postId}`
        );
        console.log(" remove like", error);
      });
  }
);

const slice = createSlice({
  name: "likes",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getLikesFromServer.fulfilled, (state, action) => {
      console.log("state likes found fulfilled :", state);
      console.log("action likes found fulfilled :", action.payload);
      return action.payload;
      // state.push(...action.payload);
    }),
      builder.addCase(addLikesFromServer.fulfilled, (state, action) => {
        console.log("state likes add fulfilled :", state);
        console.log("action likes add fulfilled:", action);
        return action.payload;
      }),
      builder.addCase(removeLikesFromServer.fulfilled, (state, action) => {
        console.log("state remove likes fulfilled :", state);
        console.log("action remove likes fulfilled:", action.meta.arg);
        // const newLikes = state.filter((likes) => likes.id !== action.meta.arg);
        // return newLikes;
      });
  },
});
export default slice.reducer;
