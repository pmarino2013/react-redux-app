import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Error404 from "./pages/Error404";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {
  return (
    <Router>
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
