import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from '../../../Services/axios/Configs/configs';

export const getStoriesFromServer = createAsyncThunk(
    "stories/getStoriesFromServer",
     async(url)=>{
        return apiRequests.get(url)
            .then(res => res.data)
            .catch((err) => {
                    console.log("err:",err)})
} )

const slice = createSlice({
    name: 'stories',
    initialState: [],
    reducers:{ 
        
    }, 

    extraReducers: (builder) => {
        builder.addCase(getStoriesFromServer.fulfilled, (state,action)=>action.payload)
    }
})
export default slice.reducer