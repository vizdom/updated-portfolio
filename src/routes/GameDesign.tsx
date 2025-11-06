import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";
import React from "react";

const GameDesign = () => {

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
        </div>
    )
}

export default GameDesign;