import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './app.scss';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
