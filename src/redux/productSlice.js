import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState :{
        items:[],
        isLoading: false
    },
    reducers:{
        getProductFetch: (state) =>{
            state.isLoading = true;
        },
        getProductSuccess: (state, action) =>{
            state.items = action.payload;
            state.isLoading = false;
        },
        getProductFailure: (state) =>{
            state.isLoading = false;
        }
    }
})

export const {getProductFetch, getProductSuccess, getProductFailure} = productSlice.actions;
export  default productSlice.reducer;