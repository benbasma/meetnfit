import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Routes>
      <Home />
    </Router>
  );
}
export default App;
