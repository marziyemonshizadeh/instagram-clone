import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from '../../../Services/axios/Configs/configs';

export const getPostsFromServer = createAsyncThunk(
    "posts/getPostsFromServer",
     async(url)=>{
        return apiRequests.get(url)
            .then(res => res.data)
            .catch((err) => {
                    console.log("err:",err)})
} )
export const removePostsFromServer = createAsyncThunk(
    "posts/removePostsFromServer",
     async(id)=>{
        return apiRequests.delete(`/posts/${id}`)
} )

const slice = createSlice({
    name: 'posts',
    initialState: [],
    reducers:{ 
        
    },

    extraReducers: (builder) => {
        builder.addCase(getPostsFromServer.fulfilled, (state,action)=>{
                    // console.log("state fulfilled :",state);
                    // console.log("action fulfilled:",action.payload);
                    state.push(...action.payload);

                },),
        builder.addCase(removePostsFromServer.fulfilled, (state,action)=>{
                    console.log("state fulfilled :",state);
                    console.log("action fulfilled:",action.payload);
                    // state.push(...action.payload);

                },)
            }
})
export default slice.reducer