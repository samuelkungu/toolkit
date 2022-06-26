import { createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;
