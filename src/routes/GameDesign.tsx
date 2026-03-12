import "../App.css";
import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";
import ImageLeft from "../components/ImageLeft";
import PhotoClue from "../images/TPC_Goat.jpg"
import ShadowDepth from "../images/ShadowedDepths.png"
import React from "react";

const GameDesign = () => {

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
            <div className={"page_content"}>
                <ImageLeft imgSrc={PhotoClue} alt={"A silhouette of a goat statue against a white sky. "}
                       title={"The Photographer's Clue"} text={"To play this game, all you need is a camera. " +
                "A DSLR will allow for the best results, but it can be played with a small digital camera, a phone " +
                "camera, or even a film camera. To play, you must select a pattern from the options below, then " +
                "use your camera to take a photo that has the same composition of values, and colors where relevant.\n " +
                "There is no objective “victory” in this game, each player or group of players must judge for " +
                "themselves what counts as a match." +
                "The only requirement to start playing is a pattern image. You can either take one yourself, or find a" +
                " layout/color pallete you want to imitate, and start taking photos!"}></ImageLeft>
                <ImageLeft imgSrc={ShadowDepth} alt={"The title screen of Shadowed Depths"} title={"Shadowed Depths"}
                       text={"A short dungeon crawler game made in Perlenspiel, with a 16x16 \"bead\" grid. The player " +
                           "cannot see far beyond their own location, and must evade enemies in the dark and navigate " +
                           "a twisting dungeon to reach the treasure at the end.\n" +
                "The game was designed with certain restrictions imposed: the game cannot have any color and it must " +
                           "be 16x16 \"beads\" in size."}></ImageLeft>
            </div>
        </div>
    )
}

export default GameDesign;