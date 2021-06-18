import React from "react";
import "./App.css";
import { LectureContextProvider } from "./Contexts/LectureContext";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/ContentContainer/ContentContainer";

function App() {
  return (
    <div className="App">
      <LectureContextProvider>
        <Nav />
        <Content />
      </LectureContextProvider>
    </div>
  );
}

export default App;
