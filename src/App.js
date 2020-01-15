import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <ul class="topnav">
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li class="left"><input type="text" placeholder="Search.." /></li>
      </ul>
    </div>
  );
}

export default App;
