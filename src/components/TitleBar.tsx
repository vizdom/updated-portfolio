import './Components.css'
import MenuBar from "./MenuBar";
import React from "react";
interface titleInfo {
    logo: string;
}
const TitleBar = ({
    logo,
                  }: titleInfo ) => {

    return (
        <div className={"title"}>
            <div className={"title_image"}>
                <a href={"/"}>
                <div className={"title_centered"}>
                    <img className={"logo"} src={logo} alt={"Owen Lacey"}/>
                </div>
                </a>
            </div>
            <div className={"menu_box"}>
                <MenuBar></MenuBar>
            </div>
        </div>
    )
};

export default TitleBar;