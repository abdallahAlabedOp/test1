import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/SingIn.jsx";
import { UserContextProvider } from "./contexats/UserContexts";
import Home from "./components/Post";
function App() {
  return (
    <Router>
        <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;