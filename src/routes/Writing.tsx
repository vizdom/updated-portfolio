import "../App.css";
import DnD from "../images/LordOfSilurum.png";
import MobyDick from "../images/ImbalanceOfAHead.png";
import TitleBar from "../components/TitleBar";
import ParagraphText from "../components/ParagraphText";
import React from "react";
import DoubleImagePage from "../components/DoubleImagePage";
import Name from "../images/Name.png";
import Footer from "../components/Footer";

const Writing = () => {

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <ParagraphText title={"Writing Projects"} text={"This is a set of my best writing work." +
                    " It includes a short story, a Dungeons and Dragons adventure, and a few pieces written for" +
                    " school. One of those is a fake Moby Dick chapter written to mimic Herman Melville's style" +
                    " and themes. Below are design documents for LARP games I have/plan to run."}></ParagraphText>

                <DoubleImagePage img1Src={DnD} img2Src={MobyDick} alt1={"The first page of a DnD adventure"}
                                 alt2={"The first page of a fake Moby Dick chapter."}
                                 title1={"A Dungeons and Dragons " +
                                     "One-Shot"} title2={"The first page of a fake Moby Dick chapter."}
                                 link1={"writing/dndadventure"}
                                 link2={"writing/mobydick"}></DoubleImagePage>
                <p className={"page_object"}>​</p>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}

export default Writing;