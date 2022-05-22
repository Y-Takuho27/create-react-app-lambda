/* App.js */
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;