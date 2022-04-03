import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
import ChatComponent from "./components/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage ></SigninPage>} exact />
        <Route path="/support" element={<ChatComponent ></ChatComponent>} exact />
      </Routes>
    </Router>
  );
}
export default App;
