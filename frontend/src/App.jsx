import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Chat from './pages/Chat.jsx'
import Signup from './pages/Signup.jsx'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './slices/authSlice.js'

const App = () => {
  const isAuth = useSelector(selectCurrentToken)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth
            ? <Chat />
            : <Navigate to="/login" />}
        />
        <Route
          path="login"
          element={isAuth
            ? <Navigate to="/" />
            : <Login />}
        />
        <Route
          path="signup"
          element={isAuth
            ? <Navigate to="/" />
            : <Signup />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
