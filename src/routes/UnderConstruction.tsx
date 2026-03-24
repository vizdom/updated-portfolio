import "../App.css";
import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";
import React from "react";
import ParagraphText from "../components/ParagraphText";


const UnderConstruction = () => {

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
            <div className={"page_content"}>
                <ParagraphText title={"Under Construction"} text={"This page is currently being worked on. " +
                    "Come back later to see what's in store!"}></ParagraphText>
            </div>

        </div>
    )
}

export default UnderConstruction;