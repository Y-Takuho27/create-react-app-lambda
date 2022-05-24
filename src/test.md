```
/* App.js */
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import TOP from "./page/Top";
import QA from "./page/QA";
import TP1 from "./page/tutorial/tutorial1"
import TP2 from "./page/tutorial/tutorial2"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/top/`} element={<TOP />} />
        <Route path={`/qa/`} element={<QA />} />
        <Route path={`/tutorial/tp1/`} element={<TP1 />} />
        <Route path={`/tutorial/tp2/`} element={<TP2 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
```