import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import apiRequests from "../../../Services/axios/Configs/configs";

export const getStoriesFromServer = createAsyncThunk(
  "stories/getStoriesFromServer",
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

const slice = createSlice({
  name: "stories",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getStoriesFromServer.fulfilled,
      (state, action) => action.payload
    );
  },
});
export default slice.reducer;
