import { createSlice } from "@reduxjs/toolkit";

const initialState={
    index:0
}

export const projectSlice=createSlice({
    name:'project',
    initialState,
    reducers:{
        updateIndex:(state,action)=>{
            state.index=action.payload
        },
    }
})

export const {updateIndex}=projectSlice.actions

export default projectSlice.reducer