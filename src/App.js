import React, { Component } from "react";
import "./App.css";
import TdlistsContainer from "./components/TdlistsContainer";

function App() {
  return (
    <div className="mainContainer">
        <div className="topHeading">
          <h1>Mithun's To-Do List</h1>
        </div>
        <TdlistsContainer />
    </div>
  );
}

export default App;
