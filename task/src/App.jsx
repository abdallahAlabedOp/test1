import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/SingIn.jsx";
import { UserContextProvider } from "./contexats/UserContexts";
import Home from "./components/Post";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <UserContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
