import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name : 'app',
    initialState : {
        isSideBar : true,
    },
    reducers : {
        appSidebarToggle : (state)=>{
            state.isSideBar = !state.isSideBar
        },
        closeSideBar : (state) => {
            state.isSideBar = false
        }
    }
})

export const {appSidebarToggle , closeSideBar} = appSlice.actions;
export default appSlice.reducer