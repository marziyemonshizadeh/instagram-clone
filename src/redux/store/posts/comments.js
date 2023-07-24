import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from '../../../Services/axios/Configs/configs';

export const getPostCommentsFromServer = createAsyncThunk(
    "comments/getPostCommentsFromServer",
     async(url)=>{
        return apiRequests.get(url)
            .then(res => res.data)
            .catch((err) => {
                    console.log("err:",err)})
} 
)
const slice = createSlice({
    name: 'comments',
    initialState: [],
    reducers:{ 
        
    },

    extraReducers: (builder) => {
        builder.addCase(getPostCommentsFromServer.fulfilled, (state,action)=>{
                    // console.log("state fulfilled 2 :",state);
                    // console.log("action fulfilled 2:",action.payload);
                    state.push(...action.payload);
                },)
            
            
            }
})
export default slice.reducer