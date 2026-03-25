import { configureStore } from "@reduxjs/toolkit";
import appReducer from './utils/appSlice'
import videoReducer from './utils/videoSlice'

const appStore = configureStore({
    reducer:{
        app : appReducer,
        video: videoReducer,
    }
})


export default appStore;