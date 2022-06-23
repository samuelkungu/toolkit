import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    </>
  );
}

export default App;
