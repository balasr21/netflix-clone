import React from "react";
import Rows from "./components/Rows/Rows.component";
import Banner from "./components/Banner/Banner.component";
import Nav from "./components/NavBar/Nav.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
    </div>
  );
}

export default App;
