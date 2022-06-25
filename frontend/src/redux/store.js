import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postSlice';
import userReducer from '../features/users/userSlice';
import authReducer from '../features/auth/authSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        users: userReducer,
    }
});
