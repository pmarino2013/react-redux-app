import React,{useEffect} from "react";

import { useDispatch } from "react-redux";
import {addAuth} from './slice/authSlice'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import ProtectedRoute from "./routes/ProtectedRoute";
import PerfilScreen from "./pages/PerfilScreen";

const App = () => {

  const dispatch = useDispatch()

useEffect(() => {

  const user = JSON.parse(localStorage.getItem('user')) || null
  if(user){
    dispatch(addAuth(user))
  }
}, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <PerfilScreen />
            </ProtectedRoute>
          }
           />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
