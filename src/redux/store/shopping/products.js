import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequests from '../../../Services/axios/Configs/configs';

export const getProductsFromServer = createAsyncThunk(
    "products/getProductsFromServer",
     async(url)=>{
        return apiRequests.get(url)
            .then(res => res.data)
            .catch((err) => {
                    console.log("err:",err)})
} )

const slice = createSlice({
    name: 'products',
    initialState: [],
    reducers:{ 
        
    }, 

    extraReducers: (builder) => {
        builder.addCase(getProductsFromServer.fulfilled, (state,action)=>action.payload)

    }
})
export default slice.reducer