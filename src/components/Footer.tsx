import './Components.css'
import LI from "../images/LI-In-Bug.png"
import React from "react";
import ButtonGeneric from "./ButtonGeneric";
interface footerInfo {
    imgSrc : string;
    alt : string;
    text? : string;
}
const Footer = ({
    imgSrc,
    alt,
                  }: footerInfo ) => {

    return (
        <div className={"footer"}>
           <div className={"footer_content"}>
                <div className={"footer_item"}>
                    <img className={"footer_logo"} src={imgSrc} alt={alt}/>
                </div>
                <div className={"footer_item"}>
                    <p className={"footer_header"}>Contact information:</p>
                    <p className={"footer_text"}><a href={"mailto:owen@vizdom.org"} target={"_blank"} rel={"noopener noreferrer"}>
                        owen@vizdom.org</a>
                    </p>
                    <p className={"footer_text"}><a href={"https://www.linkedin.com/in/owen-lacey-721205250/"}
                    target={"_blank"} rel={"noopener noreferrer"}>
                            <img className={"linkedin"} src={LI} alt={"LinkedIn"}/>
                        </a>
                    </p>
               </div>
               <div className={"footer_item"}>
                   <ButtonGeneric label={"Return to Top"} dest={"#top"}></ButtonGeneric>
               </div>
           </div>
        </div>
    )
};

export default Footer;