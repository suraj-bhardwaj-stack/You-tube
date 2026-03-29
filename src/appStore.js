import { configureStore } from "@reduxjs/toolkit";
import appReducer from './utils/appSlice'
import videoReducer from './utils/videoSlice'
import searchReducer from './utils/searchSlice'
import chatReducer from './utils/chatSlice'

const appStore = configureStore({
    reducer:{
        app : appReducer,
        video: videoReducer,
        search: searchReducer,
        chat : chatReducer

    }
})


export default appStore;