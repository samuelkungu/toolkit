import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { fetchUsers } from './features/users/userSlice';
import { fetchPosts } from './features/posts/postSlice';

store.dispatch(fetchUsers())
store.dispatch(fetchPosts());


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
