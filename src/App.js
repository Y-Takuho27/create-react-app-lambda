/* App.js */
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import TOP from "./page/Top";
import QA from "./page/QA";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/top/`} element={<TOP />} />
        <Route path={`/qa/`} element={<QA />} />
      </Routes>
    </HashRouter>
  );
};

export default App;