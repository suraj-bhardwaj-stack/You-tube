import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constent";

const chatSlice = createSlice({
    name : "chat",
    initialState : {
        message : []
    },
    reducers: {
        addLiveChat : (state , action)=>{
            
            state.message.push(action.payload)
             if (state.message.length > LIVE_CHAT_COUNT) {
        state.message.shift()
    }
        }
    }

})

export const {addLiveChat} = chatSlice.actions
export default chatSlice.reducer