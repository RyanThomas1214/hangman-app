import React, { Component } from "react";
import Board from "./Components/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Welcome to Hangman!</h1>
        <Board />
      </main>
    );
  }
}

export default App;
