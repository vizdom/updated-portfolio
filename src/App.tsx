import React from 'react';
import './App.css';
import ButtonGeneric from "./components/ButtonGeneric";
import TitleBar from "./components/TitleBar";
import Toussaint from "./images/ToussaintTownDetail.png"

function App() {
  return (
    <div className="App">
        <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ButtonGeneric label={"test"} dest={"test"}></ButtonGeneric>
      </header>
    </div>
  );
}

export default App;
