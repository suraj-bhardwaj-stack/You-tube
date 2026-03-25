import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name : 'videos',
    initialState : {
        topVideos : [],
    },
    reducers:{
        callTopVideos : (state, action)=>{
            state.topVideos = action.payload
        }
    }
})

export const {callTopVideos} = videoSlice.actions;

export default videoSlice.reducer