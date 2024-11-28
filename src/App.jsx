import React, { useEffect } from 'react';
import Home from './pages/Home/home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Logged In');
        navigate('/');
      } else {
        console.log('Logged out');
        navigate('/login');
      }
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
