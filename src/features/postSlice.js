import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Some redux toolkit', content: 'Something dope...' },
    { id: '2', title: 'Slices', content: 'The more I slice, the more...' },
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
    }
});
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;