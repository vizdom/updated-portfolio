import './Components.css'
import MenuBar from "./MenuBar";
import React from "react";
interface titleInfo {
    imgSrc : string;
    alt : string;
    text? : string;
}
const TitleBar = ({
    text,
                  }: titleInfo ) => {

    return (
        <div className={"title"}>
            <div className={"title_image"}>
                <div className={"title_centered"}>{text}</div>
            </div>
            <div className={"menu_box"}><MenuBar></MenuBar></div>
        </div>
    )
};

export default TitleBar;