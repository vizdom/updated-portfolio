import "../App.css";
import TitleBar from "../components/TitleBar";
import React from "react";
import ParagraphText from "../components/ParagraphText";
import Name from "../images/Name.png";
import Footer from "../components/Footer";
import ButtonGeneric from "../components/ButtonGeneric";


const UnderConstruction = () => {

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <div className={"page_object"}>
                    <ButtonGeneric label={"Back"} dest={document.referrer}></ButtonGeneric>
                </div>
                <ParagraphText title={"Under Construction"} text={"This page is currently being worked on. " +
                    "Come back later to see what's in store!"}></ParagraphText>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}

export default UnderConstruction;