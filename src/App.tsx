import React from 'react';
import './App.css';
import TitleBar from "./components/TitleBar";
import ImageLeft from "./components/ImageLeft";
import ImageRight from "./components/ImageRight";
import Toussaint from "./images/ToussaintTownDetail.png"
import Island from "./images/Owen_L_Color_Exterior1_V04_Oct8.png"
import Castle from "./images/Castle.png"

function App() {
  return (
    <div className="App">
        <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
        <div className={"page_content"}>
            <ImageLeft imgSrc={Island} alt={"Concept art of submarine construction on an island."} title={"About Me"}
                       text={"Hi! I'm a game designer and writer from California. I like making short narrative games " +
                           "and text based adventures, along with 2d games. I also work with escape room and LARP puzzle " +
                           "design and mechanics, trying to run short games and experiment with new game styles."
            }></ImageLeft>
            <ImageRight imgSrc={Castle} alt={"An image of the game."} title={"Current Project"} text={"Currently I'm working on a Minecraft short" +
                "game. It is based on early Minecraft adventure maps and uses both redstone mechanics and commmand blocks" +
                "to create a fully playable game."}></ImageRight>
        </div>
    </div>
  );
}

export default App;
