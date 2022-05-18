/*  Home.js */
import { Link } from "react-router-dom";
import React from "react"
import logo from "../logo.svg"
import "../App.css"
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            </p>
            <Link to={`/register/`}><Button variant="outline-light">チュートリアル</Button></Link>
            </header>
        </div>
    </>
  );
};
export default Home;