import React from "react";
import "./App.css";

const Menu = props => {
  console.log("Menu - Rendered");
  return (
    <div className="menu">
      <ul className="topnav">
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li className="search"><span className="fa fa-search form-control-feedback"></span><input type="text" placeholder="Search.." /></li>
      </ul>
      <hr />
    </div>
  );
};

const ListField = props => {
  console.log(" SectionField - Rendered");
  return (
    <div className="side">
      <ComplexList />
    </div>
  );
};

const AsideField = props => {
  console.log(" AsideField - Rendered");
  return (
    <div>
      <ul className="topSide">
        <img src="https://picsum.photos/id/1/300/200" alt="pic" />
        <li>Elise Beverly</li>
        <li>NMPLS #9545566</li>
        <li>San Francisco</li>
        <ul className="twinButton"><li><button class="button-1">Ask for quote</button></li>
          <li><button class="button-2">Chat</button></li></ul>
      </ul>
      <ul className="bottomSide">
        <li>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. </p>
        </li>
        <li>
          Language
            <ul className="language">
            <li>
              English
              </li>
            <li>
              Spanish
              </li>
          </ul>
        </li>
        <li>
          Service Offer
            <ul className="service">
            <li>Conventional</li>
            <li>Bad Credit</li>
            <li>Minorities</li>
            <li>Low Income</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

var list = require('./infoData.json')


const ComplexList = () => (
  <ul className="listItems">{
    list.map(item => (
      <li key={item.id}>
        <div>{item.name}</div>
        <div>{item.id}</div>
        <div>{item.address}</div>
        <div>{item.company}</div>
      </li>
    ))}
  </ul>
);

function App() {
  return (
    <main>
      <Menu />
      <div className="container">
        <ListField />
        <div className="vl"></div>
        <AsideField />
      </div>
    </main>
  );
}

export default App;
