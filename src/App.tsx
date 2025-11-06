import React from 'react';
import './App.css';
import ButtonGeneric from "./components/ButtonGeneric";
import TitleBar from "./components/TitleBar";
import Toussaint from "./images/ToussaintTownDetail.png"

function App() {
  return (
    <div className="App">
        <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
        <div className={"pageContent"}>
            <header>

            </header>
        </div>
    </div>
  );
}

export default App;
