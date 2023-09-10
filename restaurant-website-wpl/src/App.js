import React from "react";
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import { GlobalStyle } from "./globalStyles";
const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
