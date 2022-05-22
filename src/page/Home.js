/*  Home.js */
import { Link } from "react-router-dom";
import React from "react"
import logo from "../logo.svg"
import "../App.css"
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    	<base href="/" ></base>
      <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div class="home_button">
            <Link to={`/register/`}><Button variant="outline-light">チュートリアル</Button></Link>
            </div>
          </header>
        </div>
    </>
  );
};
export default Home;