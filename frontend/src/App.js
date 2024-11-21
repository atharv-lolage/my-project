import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import Navbar from "./Components/Navbar";
import { AuthProvider, AuthContext } from "./Context/AuthContext";
import AddBookForm from "./Components/AddBookForm";

// New ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Protected Route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/addbook" 
          element = {
            <ProtectedRoute>
              <AddBookForm/>
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
