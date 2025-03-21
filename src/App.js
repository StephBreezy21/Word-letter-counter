// App.js
import React from "react";
import WordLetterCounter from "./WordLetterCounter";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1 id="top">Digitartman</h1>
            <h2>Words and Letters Counter</h2>
            <WordLetterCounter />
        </div>
    );
}

export default App;
