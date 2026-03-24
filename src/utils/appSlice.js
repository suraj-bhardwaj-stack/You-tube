import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'app',
    initialState : {
        isSideBar : true,
    },
    reducers : {
        appSidebarToggle : (state)=>{
            state.isSideBar = !state.isSideBar
        }
    }
})

export const {appSidebarToggle} = appSlice.actions;
export default appSlice.reducer