<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
=======
<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
=======
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postSlice';
import userReducer from '../features/users/userSlice';
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
<<<<<<< HEAD
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
=======
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        users: userReducer,
    }
>>>>>>> d416079d90500b6ff2fb6475b82e1649465b8fc3
>>>>>>> 6377e52ac40f42de3dfa23095e181d5ea758c094
});
