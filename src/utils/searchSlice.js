import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search',
    initialState : {
        searchSuggestion : {}
    },
    reducers : {
        cacheResult : (state, actions)=>{
            state.searchSuggestion = {...state.searchSuggestion , ...actions.payload}
        }
    }
})

export const {cacheResult} = searchSlice.actions;
export default searchSlice.reducer