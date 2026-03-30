import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Page404 from './components/Page404.jsx';
import Chat from './components/Chat.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './slices/authSlice.js';

const App = () => {
  const isAuth = useSelector(selectCurrentToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Chat /> : <Navigate to="/login" />} />
        <Route path="login" element={isAuth ? <Navigate to="/" /> : <Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
