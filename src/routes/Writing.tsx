import "../App.css";
import Toussaint from "../images/ToussaintTownDetail.png";
import DnD from "../images/LordOfSilurum.png";
import MobyDick from "../images/ImbalanceOfAHead.png";
import TitleBar from "../components/TitleBar";
import ParagraphText from "../components/ParagraphText";
import React from "react";
import DoubleImagePage from "../components/DoubleImagePage";

const Writing = () => {

    return (
        <div className={"App"}>
            <TitleBar imgSrc={Toussaint} alt={"A Minecraft build"} text={"Owen Lacey"}></TitleBar>
            <div className={"page_content"}>
                <ParagraphText title={"Writing Projects"} text={"I can write a bunch of text here and" +
                    "make sure that it can fill out a paragraph. This should help fill space before I" +
                    " add PDFs down below here. If I type enough it'll fill space and test the code" +
                    " enough to make sure it works."}></ParagraphText>

                <DoubleImagePage img1Src={DnD} img2Src={MobyDick} alt1={"The first page of a DnD adventure"}
                                 alt2={"The first page of a fake Moby Dick chapter."}
                                 title1={"A Dungeons and Dragons " +
                                     "One-Shot"} title2={"The first page of a fake Moby Dick chapter."}
                                 link1={"dndadventure"}
                                 link2={"mobydick"}></DoubleImagePage>
                <p className={"page_object"}>​</p>
            </div>
        </div>
    )
}

export default Writing;