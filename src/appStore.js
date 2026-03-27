import { configureStore } from "@reduxjs/toolkit";
import appReducer from './utils/appSlice'
import videoReducer from './utils/videoSlice'
import searchReducer from './utils/searchSlice'

const appStore = configureStore({
    reducer:{
        app : appReducer,
        video: videoReducer,
        search: searchReducer
    }
})


export default appStore;