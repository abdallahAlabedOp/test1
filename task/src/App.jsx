import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/SingIn.jsx";
import { UserContextProvider } from "./contexats/UserContexts";
import Home from "./components/Post";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
function App() {
  return (
    <Router>
      <UserContextProvider>
         <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
      </UserContextProvider>
    </Router>
  );
}

export default App;
