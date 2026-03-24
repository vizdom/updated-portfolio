import "../App.css";
import Toussaint from "../images/ToussaintTownDetail.png";
import TitleBar from "../components/TitleBar";
import DoubleImage from "../components/DoubleImage";
import FrostSlug from "../images/OwenL_DigitalGlazingFrost_V01.png"
import BB8 from "../images/OwenL_SketchJournal2_Ver06 .png"
import CorvoBianco from "../images/CorvoBianco.png"
import Windmills from "../images/Windmills.png"
import Tallneck from "../images/Tallneck.png"
import React from "react";
import ImageLeft from "../components/ImageLeft";
import TitleText from "../components/TitleText";

const VisualArt = () => {

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
            <div className={"page_content"}>
                <DoubleImage img1Src={BB8} img2Src={FrostSlug} alt1={"A digital drawing of BB8"} alt2={"A banana slug, " +
                    "altered to appear made of ice"} title1={"Digital Painting"} title2={"Photo Editing"}
                    link1={"visualart/digitalpainting"} link2={"construction"}></DoubleImage>
                <ImageLeft imgSrc={CorvoBianco} alt={"A digital painting of Corvo Bianco from The Witcher 3."}
                           title={"Painting of Corvo Bianco"} text={"A digital painting of Corvo Bianco from The Witcher 3."}></ImageLeft>
                <TitleText title={"Minecraft Building"} text={"A lot of the visual art I've done is building in " +
                    "Minecraft. This work is a mix of creative and survival building, and the photos were taking with " +
                    "shaders. The shaders are either Complementary or BSL shaders.\n"}
                           link={"minecraft"}
                           link_text={"Full Album"}></TitleText>
                <DoubleImage img1Src={Windmills} img2Src={Tallneck} alt1={"A Minecraft build of windmills in a field."}
                             alt2={"A Minecraft build of a Tallneck from the Horizon games."} title1={"Windmills"} title2={"The Tallneck"}></DoubleImage>
            </div>
        </div>
    )
}

export default VisualArt;