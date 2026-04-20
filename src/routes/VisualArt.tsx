import "../App.css";
import TitleBar from "../components/TitleBar";
import DoubleImage from "../components/DoubleImage";
import Carousel from "../components/Carousel";
import BB8 from "../images/OwenL_SketchJournal2_Ver06 .png"
import Windmills from "../images/Windmills.png"
import React from "react";
import TitleText from "../components/TitleText";
import Name from "../images/Name.png";
import Footer from "../components/Footer";

const VisualArt = () => {

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <Carousel></Carousel>
                <DoubleImage img1Src={BB8} img2Src={Windmills} alt1={"A digital drawing of BB8"}
                             alt2={"A Minecraft build of windmills in a field."} title1={"Digital Painting"}
                             title2={"Minecraft Building"} link1={"visualart/digitalpainting"}
                             link2={"visualart/minecraft"}></DoubleImage>
                <TitleText title={"Minecraft Building"} text={"A lot of the visual art I've done is building in " +
                    "Minecraft. This work is a mix of creative and survival building, and the photos were taking with " +
                    "shaders. The shaders are either Complementary or BSL shaders.\n"}></TitleText>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}

export default VisualArt;