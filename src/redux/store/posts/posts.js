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
        builder.addCase(getPostsFromServer.fulfilled, (state,action)=>action.payload),
        
        builder.addCase(removePostsFromServer.fulfilled, (state,action)=>{
                    console.log("state remove fulfilled :",state);
                    console.log("action remove fulfilled:",action);
                    const newPosts = state.filter(post => post.id !== action.payload.meta)
                    return newPosts;
                },)
            }
})
export default slice.reducer